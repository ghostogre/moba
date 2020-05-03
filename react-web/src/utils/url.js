export default {
  getHeroList: () => '/heroes/list',
  getNewsList: () => '/news/list',
  getHeroInfo: id => `/heroes/${id}`,
  getAdsHome: () => '/ads/home',
  getArticleList: () => '/articles/list',
  getArticle: id => `/articles/${id}`
};
