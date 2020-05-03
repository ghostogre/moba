import React, { Component } from 'react';
import bgImg from '../../assets/images/bg.webp';
import coin from '../../assets/images/coin.webp';
import plusone from '../../assets/images/plusone.webp';
import './style.scss';

// 预加载图片
function loadImage (arr) {
  return new Promise(resolve => {
    let count = 0;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      // 创建图片对象
      const image = new Image();
      image.onload = () => {
        count++;
        arr.splice(i, 1, image);
        if (count === len) {
          resolve(arr);
        }
      };
      image.src = arr[i];
    }
  })
}

// 离屏canvas
function createOffScreenCanvas (image, width, height) {
  const offScreenCanvas = document.createElement('canvas');
  const ctx = offScreenCanvas.getContext('2d');
  offScreenCanvas.width = width;
  offScreenCanvas.height = height;
  ctx.drawImage(
    image,
    0,
    0,
    width,
    height
  );
  return offScreenCanvas;
}

// 判断是不是点击在金币上
function isIntersect (x, y, coin) {
  const dx = x - coin.x;
  const dy = y - coin.y;
  const withinX = dx > 0 && dx < coin.size;
  const withinY = dy > 0 && dy < coin.size;
  return withinX && withinY;
}

const sizes = [40, 50, 60];

class Activity extends Component {
  constructor (props) {
    super(props);
    this.state = {
      scrollWidth: document.documentElement.clientWidth,
      scrollHeight: document.documentElement.clientHeight
    };
    this.coinArr = [];
    this.bubbleArr = [];
    this.moveCoinAnimation = null;
    this.addCoinTimer = null;
    this.bubbleCanvas = null;
    this.coinCanvas = [];
    this.ctx = null;
  }
  render() {
    const { scrollHeight, scrollWidth } = this.state;
    return (
      <div
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${bgImg})`,
          height: `${scrollHeight}px`,
          width: `${scrollWidth}px`
        }}>
        <canvas
          className="canvas w-100"
          ref={this.getCanvasRef}
          onTouchStart={this.touchStart}
          width={scrollWidth}
          height={scrollHeight}>
          <h5>当前浏览器版本不支持！</h5>
        </canvas>
      </div>
    );
  }
  componentDidMount () {
    loadImage([bgImg, coin, plusone]).then(arr => {
      this.bubbleCanvas = createOffScreenCanvas(arr[2], 40, 40);
      this.coinCanvas = [];
      for (let i = 0; i < 3; i++) {
        this.coinCanvas.push({
          size: sizes[i],
          offScreenCanvas: createOffScreenCanvas(arr[1], sizes[i], sizes[i])
        });
      }
      this.start();
    })
    document.addEventListener('visibilitychange', this.visibility);
  }
  componentWillUnmount () {
    document.removeEventListener('visibilitychange', this.visibility);
  }
  visibility = () => { // h5事件，监听页面是否可见
    let isHidden = document.hidden;
    if (isHidden) {
      //失去焦点
      clearTimeout(this.addCoinTimer);
    } else {
      //未失去焦点
      this.createCoin();
    }
  }
  touchStart = (e) => {
    const {clientX, clientY} = e.touches[0];
    // 点击中的金币
    const clickedCoins = [];
    this.coinArr.forEach((coin, index) => {
      // 判断点击位置是否在金币内
      if (isIntersect(clientX, clientY, coin)) {
        clickedCoins.push({
          x: clientX,
          y: clientY,
          index // 记录索引
        });
      };
    });
    // 点击了重叠的金币，只要最后一个，一般来说重叠的后来的会在上面
    if (clickedCoins.length > 0) {
      const len = clickedCoins.length;
      const bubble = {
        x: clickedCoins[len - 1].x,
        y: clickedCoins[len - 1].y,
        opacity: 1
      };
      this.bubbleArr.push(bubble);
      // 移除最后一个金币
      this.coinArr.splice(clickedCoins[len - 1].index, 1);
    }
  }
  // 获取canvas 实例
  getCanvasRef = (canvas) => {
    if (canvas && canvas.getContext) {
      this.ctx = canvas.getContext('2d');
    }
  }
  start = () => {
    this.createCoin();
    this.moveCoins();
    this.drawBubble();
  }
  // 金币绘制
  createCoin = () => {
    // 随机生成1-3个金币
    const sum = Math.floor((Math.random() * 10) % 3 + 1);
    const arr = [];
    let x = 10; // 保证不贴边
    for (let i = 0; i < sum; i++) {
      const { size, offScreenCanvas } = this.randomSize(); // 随机的宽度
      x += this.calcPosition(x, size, sum - i - 1);
      let speed = Math.random * 20;
      // 创建新的金币对象
      const newCoin = {
        x,
        y: -size,
        size,
        img: offScreenCanvas,
        speed: speed > 5 ? speed: 5 // 保证速度不会过慢
      };
      x += size;
      arr.push(newCoin);
    }
    this.coinArr = [...this.coinArr, ...arr]; // 一次性的加入数组不要一个一个push
    // 每隔一段时间添加一次
    this.addCoinTimer = setTimeout(() => {
      this.createCoin();
    }, 600);
  }
  // 移动金币
  moveCoins = () => {
    // 切换TAB页面之后，主进程停止,但是 setInterval 还在执行,任务不停的加入执行栈, 返回tab时就会执行
    // 每一帧都要先清空
    window.cancelAnimationFrame(this.moveCoinAnimation);
    const { scrollWidth, scrollHeight } = this.state;
    this.ctx.clearRect(0, 0, scrollWidth, scrollHeight);
    // 绘制金币
    this.drawCoins();
    // 不断的绘制形成动画
    this.moveCoinAnimation = window.requestAnimationFrame(this.moveCoins);
  }
  // 随机获取不同大小的金币
  randomSize = () => {
    return this.coinCanvas[Math.floor(Math.random() * 10 % 3)];
  }
  // 计算位置
  calcPosition = (start, size, other) => {
    const maxSize = sizes[sizes.length - 1] + 10; // +10 防止金币紧贴
    return Math.floor((this.state.scrollWidth - size - start - maxSize * other) * Math.random());
  }
  // 绘制气泡
  drawBubble = () => {
    this.bubbleArr = this.bubbleArr.filter(bubble => bubble.opacity > 0); // 过滤消失的气泡
    this.bubbleArr.forEach((bubble, index) => {
      if (bubble.opacity > 0) {
        this.ctx.save();
        this.ctx.globalAlpha = bubble.opacity;
        this.ctx.drawImage(this.bubbleCanvas, bubble.x, bubble.y);
        this.bubbleArr.splice(index, 1, {
          ...bubble,
          opacity: bubble.opacity - 0.02
        });
        this.ctx.restore();
      }
    })
    this.drawBubbleAnimation = window.requestAnimationFrame(this.drawBubble);
  }
  drawCoins = () => {
    this.coinArr = this.coinArr.filter(coin => coin.y < this.state.scrollHeight); // 去除已经离开可视区域的金币
    this.coinArr.forEach((coin, index) => {
      const newCoin = {
        ...coin,
        y: coin.y + coin.speed
      };
      this.coinArr.splice(index, 1, newCoin);
      this.ctx.drawImage(
        coin.img,
        coin.x,
        coin.y
      );
    });
  }
}

export default Activity;