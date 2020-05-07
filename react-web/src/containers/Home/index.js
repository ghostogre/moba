import React, { Component } from 'react';
import moment from 'moment';
import Banner from './components/Banner';
import Category from './components/Category';
import ListCard from '../../components/ListCard';
import MLink from '../../components/MLink';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findNode }  from '../../utils/resolvePath';
import { sublistPath as herolistPath } from '../../redux/modules/entities/heroCategories';
import { sublistPath as articlesPath } from '../../redux/modules/entities/articleCategories';
import { actions as homeActions, getHeroes, getArticles, getAds } from '../../redux/modules/home';
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
        findNode(category, articlesPath).map((item) => {
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
        findNode(hero, herolistPath).map((item) => {
          return (
            <MLink
              tag="li"
              key={item._id}
              to={`/hero/${item._id}`}
              className="p-2 text-center"
              style={{'width': '20%'}}>
              <div className='heroAvatar'>
                <img className="heroAvatar__img" alt="" src={item.avatar}/>
              </div>
              <div>{item.name}</div>
            </MLink>
          );
        })
      }
    </ul>
  );
}

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      newsIndex: 0,
      heroIndex: 0
    };
  }
  render() {
    const { heroes = [], articles = [], ads = [] } = this.props;
    const { newsIndex, heroIndex } = this.state;
    return (
      <React.Fragment>
        <Banner data={ads}></Banner>
        <Category data={guides}></Category>
        <ListCard
          categories={articles}
          index={newsIndex}
          title="新闻资讯"
          slot={newsSlot}
          slideChange={this.articleSlide}
          swiperName='news-swiper'></ListCard>
        <ListCard
          categories={heroes}
          index={heroIndex}
          title="英雄列表"
          icon="hero"
          slideChange={this.heroSlide}
          swiperName='hero-swiper'
          slot={heroSlot}></ListCard>
      </React.Fragment>
    );
  }
  componentDidMount () {
    this.props.homeActions.loadHeroList();
    this.props.homeActions.loadArticleList();
    this.props.homeActions.loadHomeAds();
  }
  articleSlide = idx => {
    this.setState({
      newsIndex: idx
    });
  }
  heroSlide = idx => {
    this.setState({
      heroIndex: idx
    });
  }
}

const mapStateToProps = (state) => {
  return {
    heroes: getHeroes(state),
    articles: getArticles(state),
    ads: getAds(state)
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
