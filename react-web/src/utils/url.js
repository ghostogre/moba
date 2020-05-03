export default {
  // 英雄列表
  getHeroList: () => '/heroes/list',
  // 新闻列表
  getNewsList: () => '/news/list',
  // 英雄详情
  getHeroInfo: id => `/heroes/${id}`,
  // 首页广告
  getAdsHome: () => '/ads/home',
  // 文章详情
  getArticle: id => `/articles/${id}`
};
