import React, { Component } from 'react';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import HeroTop from './components/HeroTop';
import Partner from './components/Partner';
import Items from './components/Items';
import MLink from '../../components/MLink';
import MSwiper from '../../components/MSwiper';

const model = {"_id":"5e2565c777676935e0df5f07","categories":[{"_id":"5e25643be9d22c4d00cab11d","name":"战士","parent":"5e25642ee9d22c4d00cab11c","__v":0}],"items1":[{"_id":"5ea44e79d7cecc43ef2381e8","name":"兰德里的折磨","icon":"http://www.hypermoba.xyz/uploads/5b5568da851d00c0ec64108bb5f2a2fe","__v":0}],"items2":[{"_id":"5ea44e54d7cecc43ef2381e7","name":"饮血刀","icon":"http://www.hypermoba.xyz/uploads/48c651b88c2c1ea83f498616d17c2f18","__v":0}],"name":"赵云","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg","skills":[],"partners":[],"__v":0,"banner":"http://www.hypermoba.xyz/uploads/7102ca10cb078342125a7c4f96c0e267","scores":{"diffcult":7,"skills":6,"attack":6,"survive":6},"title":"大傻逼","battleTips":"冲冲冲","teamTips":"冲冲冲","usageTips":"冲冲冲"};

const introduceHeroRender = (data) => (
  <React.Fragment>
    <div className="p-3 bg-white border-bottom">
      <div className="flex-row">
        <MLink tag="button" to="/" className="btn btn-lg flex-1">
          <i className="iconfont icon-video"></i>
          英雄介绍视频
        </MLink>
        <MLink tag="button" to="/" className="btn btn-lg flex-1 ml-2">
          <i className="iconfont icon-image"></i>
          一图说英雄
        </MLink>
      </div>
    </div>
    <Card plain={true} title="出装推荐">
      <Items items1={data.items1} items2={data.items2}></Items>
    </Card>
    <Card plain={true} title="使用技巧">
      <p className="m-0">{data.usageTips}</p>
    </Card>
    <Card plain={true} title="对抗技巧">
      <p className="m-0">{data.battleTips}</p>
    </Card>
    <Card plain={true} title="团战思路">
      <p className="m-0">{data.teamTips}</p>
    </Card>
    <Card plain={true} title="英雄关系">
      <Partner data={data.partners}></Partner>
    </Card>
  </React.Fragment>
);

class Hero extends Component {
  constructor (props) {
    super(props);
    this.state = {
      realIndex: 0 // 当前swiper
    };
  }
  render() {
    const { realIndex } = this.state;
    return (
      <div className="page-hero">
        <div className="topbar bg-black py-2 px-3 flex-row ai-center">
          <img src={Logo} alt="" height="30" />
          <div className="px-2 flex-1">
            <div className="text-white">王者荣耀</div>
            <span className="ml-2 text-white">攻略站</span>
          </div>
          <Link className="text-white" to="/" tag="div">更多英雄 &gt;</Link>
        </div>
        {/* end of top */}
        <HeroTop {...model}></HeroTop>
        <div>
          <div className="px-3 bg-white">
            <div className="nav flex-row py-2 jc-around border-bottom pt-3 pb-2">
              <div className={realIndex === 0 ? "nav-item active": "nav-item"} onClick={this.slide.bind(this, 0)}>
                <div className="nav-link">英雄初识</div>
              </div>
              <div className={realIndex === 1 ? "nav-item active": "nav-item"} onClick={this.slide.bind(this, 1)}>
                <div className="nav-link">进阶攻略</div>
              </div>
            </div>
          </div>
          <MSwiper
            slideChange={this.slide}
            index={realIndex}
            swiperName="heroDetail-swiper"
            slotArray={[introduceHeroRender(model), null]}></MSwiper>
        </div>
      </div>
    );
  }
  slide = (index) => {
    this.setState({
      realIndex: index
    });
  }
}

export default Hero;
