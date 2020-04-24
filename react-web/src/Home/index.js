import React, { Component } from 'react';
import AsyncComponent from '../utils/AsyncComponent';
import moment from 'moment';
import './style.scss';

const Banner = AsyncComponent(() => import('./components/Banner'));
const Category = AsyncComponent(() => import('./components/Category'));
const ListCard = AsyncComponent(() => import('../components/ListCard'));
const MLink = AsyncComponent(() => import('../components/MLink'));

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

const newsList = [{"name":"热门","newsList":[{"_id":"5e2529e8b3deac5f5023024f","categories":[{"_id":"5e2529c54b82750fc435164f","name":"赛事","parent":"5e25299c4b82750fc435164b","__v":0},{"_id":"5e2529b24b82750fc435164d","name":"公告","parent":"5e25299c4b82750fc435164b","__v":0}],"title":"新春王者翼起嗨 千店齐发线下开黑","__v":0,"createdAt":"2020-01-20T04:17:44.059Z","updatedAt":"2020-01-20T13:48:51.612Z","content":"<p><strong>老亚瑟发现1月16日版本更新后，嬴政小头像（包含其皮肤头像）出现不显示的问题。</strong><strong style=\"color: rgb(255, 0, 0);\">目前问题正在紧急定位中</strong>。</p><p>问题说明：<strong style=\"color: rgb(255, 0, 0);\">1月16日版本更新后，嬴政小头像（包含其皮肤头像）出现不显示的问题</strong></p><p>当前状态：<strong style=\"color: rgb(255, 0, 0);\">目前问题正在紧急定位中</strong></p><p>&nbsp;</p><p>我们对给各位召唤师造成影响感到非常非常的抱歉，给各位召唤师们带来的不便还请谅解，我们将在官网和其他官方平台为您及时更新处理进度。</p>","categoryName":"赛事"},{"_id":"5e2529e8b3deac5f50230250","categories":[{"_id":"5e2529b24b82750fc435164d","name":"公告","parent":"5e25299c4b82750fc435164b","__v":0},{"_id":"5e2529c54b82750fc435164f","name":"赛事","parent":"5e25299c4b82750fc435164b","__v":0}],"title":"峡谷英雄辞旧岁，快手集结迎新年","__v":0,"createdAt":"2020-01-20T04:17:44.060Z","updatedAt":"2020-01-20T16:07:11.095Z","content":"<p>亲爱的召唤师：</p><p>&nbsp;&nbsp;&nbsp;全新活动玩法-觉醒之战将于版本更新后同步开启，关于玩法的详细介绍<a href=\"http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&amp;tid=438384\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 0, 0);\">&gt;&gt;点击这里&lt;&lt;</a>查看。</p>","categoryName":"公告"},{"_id":"5e2529e8b3deac5f50230251","categories":[{"_id":"5e2529b24b82750fc435164d","name":"公告","parent":"5e25299c4b82750fc435164b","__v":0},{"_id":"5e2529a44b82750fc435164c","name":"新闻","parent":"5e25299c4b82750fc435164b","__v":0}],"title":"觉醒之战——斗鱼主播带你嗨翻天","__v":0,"createdAt":"2020-01-20T04:17:44.060Z","updatedAt":"2020-01-20T04:17:44.060Z","categoryName":"公告"},{"_id":"5e2529e8b3deac5f50230252","categories":[{"_id":"5e2529a44b82750fc435164c","name":"新闻","parent":"5e25299c4b82750fc435164b","__v":0},{"_id":"5e2529be4b82750fc435164e","name":"活动","parent":"5e25299c4b82750fc435164b","__v":0}],"title":"年兽入侵丨那个神秘生物来了！搅乱峡谷的竟是它？！","__v":0,"createdAt":"2020-01-20T04:17:44.060Z","updatedAt":"2020-01-20T04:17:44.061Z","categoryName":"新闻"},{"_id":"5e2529e8b3deac5f50230253","categories":[{"_id":"5e2529a44b82750fc435164c","name":"新闻","parent":"5e25299c4b82750fc435164b","__v":0},{"_id":"5e2529b24b82750fc435164d","name":"公告","parent":"5e25299c4b82750fc435164b","__v":0}],"title":"屈臣氏联合王者荣耀，打造新年游戏购物新体验","__v":0,"createdAt":"2020-01-20T04:17:44.061Z","updatedAt":"2020-01-20T04:17:44.061Z","categoryName":"新闻"}]},{"_id":"5e2529a44b82750fc435164c","name":"新闻","parent":"5e25299c4b82750fc435164b","__v":0,"newsList":[{"_id":"5e2529e8b3deac5f50230251","categories":["5e2529b24b82750fc435164d","5e2529a44b82750fc435164c"],"title":"觉醒之战——斗鱼主播带你嗨翻天","__v":0,"createdAt":"2020-01-20T04:17:44.060Z","updatedAt":"2020-01-20T04:17:44.060Z","categoryName":"新闻"},{"_id":"5e2529e8b3deac5f50230252","categories":["5e2529a44b82750fc435164c","5e2529be4b82750fc435164e"],"title":"年兽入侵丨那个神秘生物来了！搅乱峡谷的竟是它？！","__v":0,"createdAt":"2020-01-20T04:17:44.060Z","updatedAt":"2020-01-20T04:17:44.061Z","categoryName":"新闻"},{"_id":"5e2529e8b3deac5f50230253","categories":["5e2529a44b82750fc435164c","5e2529b24b82750fc435164d"],"title":"屈臣氏联合王者荣耀，打造新年游戏购物新体验","__v":0,"createdAt":"2020-01-20T04:17:44.061Z","updatedAt":"2020-01-20T04:17:44.061Z","categoryName":"新闻"},{"_id":"5e2529e8b3deac5f50230255","categories":["5e2529a44b82750fc435164c","5e2529b24b82750fc435164d"],"title":"李白-凤求凰个人主页展示异常问题说明","__v":0,"createdAt":"2020-01-20T04:17:44.061Z","updatedAt":"2020-01-20T04:17:44.061Z","categoryName":"新闻"},{"_id":"5e2529e8b3deac5f50230256","categories":["5e2529a44b82750fc435164c","5e2529b24b82750fc435164d"],"title":"1月16日全服不停机更新公告","__v":0,"createdAt":"2020-01-20T04:17:44.062Z","updatedAt":"2020-01-20T04:17:44.062Z","categoryName":"新闻"}]},{"_id":"5e2529b24b82750fc435164d","name":"公告","parent":"5e25299c4b82750fc435164b","__v":0,"newsList":[{"_id":"5e2529e8b3deac5f5023024f","categories":["5e2529c54b82750fc435164f","5e2529b24b82750fc435164d"],"title":"新春王者翼起嗨 千店齐发线下开黑","__v":0,"createdAt":"2020-01-20T04:17:44.059Z","updatedAt":"2020-01-20T13:48:51.612Z","content":"<p><strong>老亚瑟发现1月16日版本更新后，嬴政小头像（包含其皮肤头像）出现不显示的问题。</strong><strong style=\"color: rgb(255, 0, 0);\">目前问题正在紧急定位中</strong>。</p><p>问题说明：<strong style=\"color: rgb(255, 0, 0);\">1月16日版本更新后，嬴政小头像（包含其皮肤头像）出现不显示的问题</strong></p><p>当前状态：<strong style=\"color: rgb(255, 0, 0);\">目前问题正在紧急定位中</strong></p><p>&nbsp;</p><p>我们对给各位召唤师造成影响感到非常非常的抱歉，给各位召唤师们带来的不便还请谅解，我们将在官网和其他官方平台为您及时更新处理进度。</p>","categoryName":"公告"},{"_id":"5e2529e8b3deac5f50230250","categories":["5e2529b24b82750fc435164d","5e2529c54b82750fc435164f"],"title":"峡谷英雄辞旧岁，快手集结迎新年","__v":0,"createdAt":"2020-01-20T04:17:44.060Z","updatedAt":"2020-01-20T16:07:11.095Z","content":"<p>亲爱的召唤师：</p><p>&nbsp;&nbsp;&nbsp;全新活动玩法-觉醒之战将于版本更新后同步开启，关于玩法的详细介绍<a href=\"http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&amp;tid=438384\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 0, 0);\">&gt;&gt;点击这里&lt;&lt;</a>查看。</p>","categoryName":"公告"},{"_id":"5e2529e8b3deac5f50230251","categories":["5e2529b24b82750fc435164d","5e2529a44b82750fc435164c"],"title":"觉醒之战——斗鱼主播带你嗨翻天","__v":0,"createdAt":"2020-01-20T04:17:44.060Z","updatedAt":"2020-01-20T04:17:44.060Z","categoryName":"公告"},{"_id":"5e2529e8b3deac5f50230253","categories":["5e2529a44b82750fc435164c","5e2529b24b82750fc435164d"],"title":"屈臣氏联合王者荣耀，打造新年游戏购物新体验","__v":0,"createdAt":"2020-01-20T04:17:44.061Z","updatedAt":"2020-01-20T04:17:44.061Z","categoryName":"公告"},{"_id":"5e2529e8b3deac5f50230254","categories":["5e2529b24b82750fc435164d","5e2529be4b82750fc435164e"],"title":"嬴政小头像不显示问题说明","__v":0,"createdAt":"2020-01-20T04:17:44.061Z","updatedAt":"2020-01-20T04:17:44.061Z","categoryName":"公告"}]},{"_id":"5e2529be4b82750fc435164e","name":"活动","parent":"5e25299c4b82750fc435164b","__v":0,"newsList":[{"_id":"5e2529e8b3deac5f50230252","categories":["5e2529a44b82750fc435164c","5e2529be4b82750fc435164e"],"title":"年兽入侵丨那个神秘生物来了！搅乱峡谷的竟是它？！","__v":0,"createdAt":"2020-01-20T04:17:44.060Z","updatedAt":"2020-01-20T04:17:44.061Z","categoryName":"活动"},{"_id":"5e2529e8b3deac5f50230254","categories":["5e2529b24b82750fc435164d","5e2529be4b82750fc435164e"],"title":"嬴政小头像不显示问题说明","__v":0,"createdAt":"2020-01-20T04:17:44.061Z","updatedAt":"2020-01-20T04:17:44.061Z","categoryName":"活动"},{"_id":"5e2529e8b3deac5f5023025b","categories":["5e2529be4b82750fc435164e","5e2529c54b82750fc435164f"],"title":"【觉醒英雄，赢精彩豪礼】活动开启公告","__v":0,"createdAt":"2020-01-20T04:17:44.063Z","updatedAt":"2020-01-20T04:17:44.063Z","categoryName":"活动"},{"_id":"5e2529e8b3deac5f5023025c","categories":["5e2529c54b82750fc435164f","5e2529be4b82750fc435164e"],"title":"娜可露露首套史诗皮肤-晚萤即将上架 更多礼遇等你解锁！","__v":0,"createdAt":"2020-01-20T04:17:44.063Z","updatedAt":"2020-01-20T04:17:44.063Z","categoryName":"活动"},{"_id":"5e2529e8b3deac5f5023025d","categories":["5e2529a44b82750fc435164c","5e2529be4b82750fc435164e"],"title":"探秘玄雍活动 参与拿专属好礼","__v":0,"createdAt":"2020-01-20T04:17:44.063Z","updatedAt":"2020-01-20T04:17:44.063Z","categoryName":"活动"}]},{"_id":"5e2529c54b82750fc435164f","name":"赛事","parent":"5e25299c4b82750fc435164b","__v":0,"newsList":[{"_id":"5e2529e8b3deac5f5023024f","categories":["5e2529c54b82750fc435164f","5e2529b24b82750fc435164d"],"title":"新春王者翼起嗨 千店齐发线下开黑","__v":0,"createdAt":"2020-01-20T04:17:44.059Z","updatedAt":"2020-01-20T13:48:51.612Z","content":"<p><strong>老亚瑟发现1月16日版本更新后，嬴政小头像（包含其皮肤头像）出现不显示的问题。</strong><strong style=\"color: rgb(255, 0, 0);\">目前问题正在紧急定位中</strong>。</p><p>问题说明：<strong style=\"color: rgb(255, 0, 0);\">1月16日版本更新后，嬴政小头像（包含其皮肤头像）出现不显示的问题</strong></p><p>当前状态：<strong style=\"color: rgb(255, 0, 0);\">目前问题正在紧急定位中</strong></p><p>&nbsp;</p><p>我们对给各位召唤师造成影响感到非常非常的抱歉，给各位召唤师们带来的不便还请谅解，我们将在官网和其他官方平台为您及时更新处理进度。</p>","categoryName":"赛事"},{"_id":"5e2529e8b3deac5f50230250","categories":["5e2529b24b82750fc435164d","5e2529c54b82750fc435164f"],"title":"峡谷英雄辞旧岁，快手集结迎新年","__v":0,"createdAt":"2020-01-20T04:17:44.060Z","updatedAt":"2020-01-20T16:07:11.095Z","content":"<p>亲爱的召唤师：</p><p>&nbsp;&nbsp;&nbsp;全新活动玩法-觉醒之战将于版本更新后同步开启，关于玩法的详细介绍<a href=\"http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&amp;tid=438384\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 0, 0);\">&gt;&gt;点击这里&lt;&lt;</a>查看。</p>","categoryName":"赛事"},{"_id":"5e2529e8b3deac5f50230259","categories":["5e2529a44b82750fc435164c","5e2529c54b82750fc435164f"],"title":"凤求凰&amp;凤凰于飞限时返场 皮肤优化即将来袭","__v":0,"createdAt":"2020-01-20T04:17:44.062Z","updatedAt":"2020-01-20T04:17:44.062Z","categoryName":"赛事"},{"_id":"5e2529e8b3deac5f5023025b","categories":["5e2529be4b82750fc435164e","5e2529c54b82750fc435164f"],"title":"【觉醒英雄，赢精彩豪礼】活动开启公告","__v":0,"createdAt":"2020-01-20T04:17:44.063Z","updatedAt":"2020-01-20T04:17:44.063Z","categoryName":"赛事"},{"_id":"5e2529e8b3deac5f5023025c","categories":["5e2529c54b82750fc435164f","5e2529be4b82750fc435164e"],"title":"娜可露露首套史诗皮肤-晚萤即将上架 更多礼遇等你解锁！","__v":0,"createdAt":"2020-01-20T04:17:44.063Z","updatedAt":"2020-01-20T04:17:44.063Z","categoryName":"赛事"}]}]

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
    return (
      <React.Fragment>
        <Banner data={[1, 2, 3]}></Banner>
        <Category data={guides}></Category>
        <ListCard categories={newsList} title="新闻资讯" slot={newsSlot} swiperName='news-swiper'></ListCard>
        <ListCard title="英雄列表" icon="hero" swiperName='hero-swiper' slot={heroSlot}></ListCard>
      </React.Fragment>
    );
  }
}

export default Home;
