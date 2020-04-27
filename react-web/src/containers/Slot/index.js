import React, { Component } from 'react';
import SlotMachine from './components/SlotMachine';
import './style.scss';

const heroes = [{"_id":"5e2565c777676935e0df5f07","categories":["5e25643be9d22c4d00cab11d"],"items1":["5ea44e79d7cecc43ef2381e8"],"items2":["5ea44e54d7cecc43ef2381e7"],"name":"赵云","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg","skills":[],"partners":[],"__v":0,"banner":"http://www.hypermoba.xyz/uploads/7102ca10cb078342125a7c4f96c0e267","scores":{"diffcult":7,"skills":6,"attack":6,"survive":6},"title":"大傻逼","battleTips":"冲冲冲","teamTips":"冲冲冲","usageTips":"冲冲冲"},{"_id":"5e2565c777676935e0df5f08","categories":["5e25643be9d22c4d00cab11d"],"items1":[],"items2":[],"name":"墨子","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg","skills":[],"partners":[],"__v":0},{"_id":"5e2565c777676935e0df5f09","categories":["5e25643be9d22c4d00cab11d"],"items1":[],"items2":[],"name":"钟无艳","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg","skills":[],"partners":[],"__v":0},{"_id":"5e2565c777676935e0df5f0a","categories":["5e25643be9d22c4d00cab11d"],"items1":[],"items2":[],"name":"吕布","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg","skills":[],"partners":[],"__v":0},{"_id":"5e2565c777676935e0df5f0b","categories":["5e25643be9d22c4d00cab11d"],"items1":[],"items2":[],"name":"夏侯惇","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg","skills":[],"partners":[],"__v":0},{"_id":"5e2565c777676935e0df5f0c","categories":["5e25643be9d22c4d00cab11d"],"items1":[],"items2":[],"name":"曹操","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg","skills":[],"partners":[],"__v":0},{"_id":"5e2565c777676935e0df5f0d","categories":["5e25643be9d22c4d00cab11d"],"items1":[],"items2":[],"name":"典韦","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg","skills":[],"partners":[],"__v":0},{"_id":"5e2565c777676935e0df5f0e","categories":["5e25643be9d22c4d00cab11d"],"items1":[],"items2":[],"name":"宫本武藏","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg","skills":[],"partners":[],"__v":0},{"_id":"5e2565c777676935e0df5f0f","categories":["5e25643be9d22c4d00cab11d"],"items1":[],"items2":[],"name":"达摩","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg","skills":[],"partners":[],"__v":0},{"_id":"5e2565c777676935e0df5f10","categories":["5e25643be9d22c4d00cab11d"],"items1":[],"items2":[],"name":"老夫子","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg","skills":[],"partners":[],"__v":0}];

class Slot extends Component {
  constructor (props) {
    super(props);
    this.state = {
      matchIndex: -1
    }
  }
  render() {
    return (
      <main className="slot-wrapper text-center flex-column ai-center">
        <h3>点击开始，查看你的本命英雄</h3>
        <section className="slot-machine">
          <SlotMachine
            scrollList={heroes.length > 0 ? heroes : []}
            matchIndex={this.state.matchIndex}
            imgLabel="avatar"
            handleStart={this.requestResult}
          ></SlotMachine>
        </section>
      </main>
    );
  }
  requestResult = () => {
    // 延时任务
    setTimeout(() => {
      // 伪随机
      const index = Math.floor((heroes.length - 1) * Math.random());
      this.setState({
        matchIndex: index
      });
    }, 3000);
  }
}

export default Slot;