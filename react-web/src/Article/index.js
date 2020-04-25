import React, { Component } from 'react';
import moment from 'moment';
import HomeHeader from '../Home/components/HomeHeader';
import './style.scss';

const model = {"_id":"5e2529e8b3deac5f5023024f","categories":["5e2529c54b82750fc435164f","5e2529b24b82750fc435164d"],"title":"新春王者翼起嗨 千店齐发线下开黑","__v":0,"createdAt":"2020-01-20T04:17:44.059Z","updatedAt":"2020-01-20T13:48:51.612Z","content":"<p><strong>老亚瑟发现1月16日版本更新后，嬴政小头像（包含其皮肤头像）出现不显示的问题。</strong><strong style=\"color: rgb(255, 0, 0);\">目前问题正在紧急定位中</strong>。</p><p>问题说明：<strong style=\"color: rgb(255, 0, 0);\">1月16日版本更新后，嬴政小头像（包含其皮肤头像）出现不显示的问题</strong></p><p>当前状态：<strong style=\"color: rgb(255, 0, 0);\">目前问题正在紧急定位中</strong></p><p>&nbsp;</p><p>我们对给各位召唤师造成影响感到非常非常的抱歉，给各位召唤师们带来的不便还请谅解，我们将在官网和其他官方平台为您及时更新处理进度。</p>","related":[{"categories":["5e2529c54b82750fc435164f","5e2529b24b82750fc435164d"],"_id":"5e2529e8b3deac5f5023024f","title":"新春王者翼起嗨 千店齐发线下开黑","__v":0,"createdAt":"2020-01-20T04:17:44.059Z","updatedAt":"2020-01-20T13:48:51.612Z","content":"<p><strong>老亚瑟发现1月16日版本更新后，嬴政小头像（包含其皮肤头像）出现不显示的问题。</strong><strong style=\"color: rgb(255, 0, 0);\">目前问题正在紧急定位中</strong>。</p><p>问题说明：<strong style=\"color: rgb(255, 0, 0);\">1月16日版本更新后，嬴政小头像（包含其皮肤头像）出现不显示的问题</strong></p><p>当前状态：<strong style=\"color: rgb(255, 0, 0);\">目前问题正在紧急定位中</strong></p><p>&nbsp;</p><p>我们对给各位召唤师造成影响感到非常非常的抱歉，给各位召唤师们带来的不便还请谅解，我们将在官网和其他官方平台为您及时更新处理进度。</p>"},{"categories":["5e2529b24b82750fc435164d","5e2529c54b82750fc435164f"],"_id":"5e2529e8b3deac5f50230250","title":"峡谷英雄辞旧岁，快手集结迎新年","__v":0,"createdAt":"2020-01-20T04:17:44.060Z","updatedAt":"2020-01-20T16:07:11.095Z","content":"<p>亲爱的召唤师：</p><p>&nbsp;&nbsp;&nbsp;全新活动玩法-觉醒之战将于版本更新后同步开启，关于玩法的详细介绍<a href=\"http://pvp.qq.com/m/m201606/newCont.shtml?G_Biz=18&amp;tid=438384\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 0, 0);\">&gt;&gt;点击这里&lt;&lt;</a>查看。</p>"}]};

class Article extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeHeader></HomeHeader>
        <div className="page-article">
          <div className="flex-row py-3 px-2 border-bottom">
            <div className="iconfont icon-back text-blue"></div>
            <strong className="flex-1 text-blue">{model.title}</strong>
            <div className="text-grey fs-sm">{moment(model.createdAt).format('YYYY-MM-DD')}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Article;
