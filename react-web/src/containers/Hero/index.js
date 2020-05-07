import React, { Component } from 'react';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import HeroTop from './components/HeroTop';
import Partner from './components/Partner';
import Items from './components/Items';
import MLink from '../../components/MLink';
import MSwiper from '../../components/MSwiper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHero } from '../../redux/modules/entities/heroes';
import { actions as heroInfoActions } from '../../redux/modules/hero';

const introduce = (data) => (
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
    const { hero } = this.props;
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
        {
          hero ? (
            <React.Fragment>
              <HeroTop {...hero}></HeroTop>
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
                  slotArray={[introduce(hero), null]}></MSwiper>
              </div>
            </React.Fragment>
          ): null
        }
      </div>
    );
  }
  componentDidMount () {
    const { hero } = this.props;
    if (!hero) {
      const { id } = this.props.match.params;
      this.props.heroInfoActions.loadHeroInfo(id);
    }
  }
  slide = (index) => {
    this.setState({
      realIndex: index
    });
  }
}

const mapStatToProps = (state, props) => {
  const { id } = props.match.params;
  return {
    hero: getHero(state, id)
  };
  console.log(id)
}

const mapDispatchToProps = dispatch => {
  return {
    heroInfoActions: bindActionCreators(heroInfoActions, dispatch)
  };
}

export default connect(
  mapStatToProps,
  mapDispatchToProps
)(Hero);
