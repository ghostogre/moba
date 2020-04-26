import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bg from '../../../../assets/images/bg.webp';
import './style.scss';

class SlotMachine extends Component {
  constructor (props) {
    super(props);
    this.state = {
      y1: 0,
      y2: 0,
      y3: 0,
      wrapperHeight: 0 // 容器高度
    };
  }
  render() {
    const { scrollList, imgLabel, btnText } = this.props;
    const { y1, y2, y3 } = this.state;
    return (
      <div className="slot" style={{ backgroundImage: `url(${bg})` }}>
        <div className="slot-list clearfix px-3 py-2">
          <div ref={this.wrapperHeight} className="slot-listWrapper flex-row">
            <ul className="slot-list__line flex-1 mr-1" style={{transform: `translateY(-${y1}px)`}}>
              {
                scrollList.map((item, index) => {
                  return (
                    <li className="slot-item bg-light text-center py-1" key={item._id + index}
                      ><img src={item[imgLabel]} alt=""/></li>
                  );
                })
              }
            </ul>
            <ul className="slot-list__line flex-1 mr-1" style={{transform: `translateY(-${y2}px)`}}>
              {
                scrollList.map((item, index) => {
                  return (
                    <li className="slot-item bg-light text-center py-1" key={item._id + index}
                      ><img src={item[imgLabel]} alt=""/></li>
                  );
                })
              }
            </ul>
            <ul className="slot-list__line flex-1 mr-1" style={{transform: `translateY(-${y3}px)`}}>
              {
                scrollList.map((item, index) => {
                  return (
                    <li className="slot-item bg-light text-center py-1" key={item._id + index}
                      ><img src={item[imgLabel]} alt=""/></li>
                  );
                })
              }
            </ul>
          </div>
        </div>
        <button className="btn start-btn text-white bg-primary" onClick={this.begin}>{btnText}</button>
      </div>
    );
  }
  // 获取高度
  wrapperHeight = (wrapper) => {
    this.setState({
      wrapperHeight: wrapper.clientHeight
    })
  }
  // 开始运行
  begin = () => {
    if (this.isRunning) { // 运行中
      return;
    }
    this.isRunning = false;
    this.resultIndex = -1
    const { timeout } = this.props;
    // 处理滚动
    this.scroll('y1');
    let timer2 = setTimeout(() => {
      this.scroll('y2');
      clearTimeout(timer2);
    }, timeout);
    let timer3 = setTimeout(() => {
      this.scroll('y3');
      clearTimeout(timer3)
    }, timeout * 1.5);
  }
  // 滚动
  scroll = (key) => {
    const { wrapperHeight } = this.state;
    const { scrollList } = this.props;
    const length = scrollList.length;
    let circleNumber = 0; // 圈数
    let lastComplete = true; // 最后一圈是否跑完了
    let g = 0.04 * wrapperHeight; // 快速
    let slow = 0.02 * wrapperHeight; // 慢速
    const func = () => {
      const scrollEndDistance = this.resultIndex * wrapperHeight;
      if ((circleNumber < 6) || (this.resultIndex === -1)) { // 保证返回之前和约定次数之前都会在滚动
        this.setState((prevState) => prevState[key] += g);
        if (this.state[key] > (length * wrapperHeight)) { // 无限滚动的效果
          circleNumber++;
          this.setState((prevState) => prevState[key] - (length * wrapperHeight));
        }
        window.requestAnimationFrame(func);
      } else {
        // 保证让他多滚动一圈
        if (lastComplete) {
          this.setState((prevState) => prevState[key] += slow);
          if (this.state[key] > (length * wrapperHeight)) { // 无限滚动的效果
            lastComplete = false;
            this.setState((prevState) => prevState[key] - (length * wrapperHeight));
          }
          window.requestAnimationFrame(func);
        } else if ((this.state[key] + slow) < scrollEndDistance) {
          this.setState((prevState) => prevState[key] += slow);
          window.requestAnimationFrame(func);
        } else {
          console.log(scrollEndDistance)
          this.setState({
            [key]: scrollEndDistance
          });
          console.log(scrollEndDistance)
          this.isRunning = false;
        }
      }
    }
    window.requestAnimationFrame(func);
  }
  getResultIndex () {
    // 当定时器执行到的时候
    const { matchResult, scrollList } = this.props;
    // 获取结果
    scrollList.some((item, index) => {
      if (matchResult(item)) {
        this.resultIndex = index;
      }
      return false;
    });
  }
}

SlotMachine.defaultProps = {
  btnText: '开始',
  scrollList: [],
  imgLabel: '',
  matchResult: () => false,
  timeout: 500, // 三个滚动延迟
  handleStart: () => {}
};

SlotMachine.propTypes = {
  scrollList: PropTypes.array.isRequired,
  matchResult: PropTypes.func.isRequired,
  imgLabel: PropTypes.string.isRequired,
  timeout: PropTypes.number,
  handleStart: PropTypes.func.isRequired
};

export default SlotMachine;
