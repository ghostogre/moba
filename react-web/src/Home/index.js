import React, { Component } from 'react';
import AsyncComponent from '../utils/AsyncComponent';
import './style.scss';

const Banner = AsyncComponent(() => import('./components/Banner'));
const Category = AsyncComponent(() => import('./components/Category'));
const ListCard = AsyncComponent(() => import('../components/ListCard'));

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

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner data={[1, 2, 3]}></Banner>
        <Category data={guides}></Category>
        <ListCard></ListCard>
      </React.Fragment>
    );
  }
}

export default Home;
