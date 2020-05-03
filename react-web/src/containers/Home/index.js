import React, { Component } from 'react';
import moment from 'moment';
import Banner from './components/Banner';
import Category from './components/Category';
import ListCard from '../../components/ListCard';
import MLink from '../../components/MLink';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as homeActions, getHeroes, getArticles } from '../../redux/modules/home';
import './style.scss';

const guides = [
  {
    title: '爆料站',
    iconName: 'news'
  },
  {
    title: '故事站',
    iconName: 'story'
  },
  {
    title: '周边商场',
    iconName: 'store'
  },
  {
    title: '体验服',
    iconName: 'beta'
  },
  {
    title: '新人专区',
    iconName: 'xrzq'
  },
  {
    title: '荣耀·传承',
    iconName: 'whz'
  },
  {
    title: '模拟战资料库',
    iconName: 'trz'
  },
  {
    title: '王者营地',
    iconName: 'wzyd'
  },
  {
    title: '公众号',
    iconName: 'wx'
  },
  {
    title: '版本介绍',
    iconName: 'version'
  }
]

// 新闻列表插槽
const newsSlot = function (category, index) {
  return (
    <ul key={index} className="w-100 swiper-slide">
      {
        category.newsList.map((item) => {
          return (
            <MLink
              key={item._id}
              tag='li'
              to={`/articles/${item._id}`}
              className="py-2 fs-lg flex-row">
              <span className="text-info">[{item.categoryName}]</span>
              <span className="px-2">|</span>
              <span className="flex-1 text-dark-1 text-ellipsis pr-2">{item.title}</span>
              <span className="text-dark fs-sm">{moment(item.createdAt).format('MM/DD')}</span>
            </MLink>
          )
        })
      }
    </ul>
  )
}

// 英雄列表插槽
const heroSlot = function (hero, i) {
  return (
    <ul key={hero._id} className="flex-row flex-wrap" style={{margin: '0 -0.5rem'}}>
      {
        hero.heroList.map((item) => {
          return (<MLink
            tag="li"
            key={item._id}
            to={`/hero/${item._id}`}
            className="p-2 text-center"
            style={{'width': '20%'}}>
            <div className='heroAvatar'>
              <img className="heroAvatar__img" alt="" src={item.avatar}/>
            </div>
            <div>{item.name}</div>
          </MLink>)
        })
      }
    </ul>
  );
}

class Home extends Component {
  render() {
    const { heroes = [], articles = [] } = this.props;
    return (
      <React.Fragment>
        <Banner data={[1, 2, 3]}></Banner>
        <Category data={guides}></Category>
        <ListCard categories={articles} title="新闻资讯" slot={newsSlot} swiperName='news-swiper'></ListCard>
        <ListCard categories={heroes} title="英雄列表" icon="hero" swiperName='hero-swiper' slot={heroSlot}></ListCard>
      </React.Fragment>
    );
  }
  componentDidMount () {
    this.props.homeActions.loadHeroList();
    this.props.homeActions.loadArticleList();
  }
}

const mapStateToProps = (state) => {
  return {
    heroes: getHeroes(state),
    articles: getArticles(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
