import React, { Component } from 'react';
import moment from 'moment';
import './style.scss';
import MLink from '../../components/MLink';
import { connect } from 'react-redux';
import { actions as articleActions, getArticleById } from '../../redux/modules/article';
import { bindActionCreators } from 'redux';

class Article extends Component {
  render() {
    const { article } = this.props;
    if (article) {
      return (
        <React.Fragment>
          <div className="page-article">
            <div className="flex-row py-3 px-2 border-bottom">
              <div className="iconfont icon-back text-blue"></div>
              <strong className="flex-1 text-blue">{article.title}</strong>
              <div className="text-grey fs-sm">{moment(article.createdAt).format('YYYY-MM-DD')}</div>
            </div>
            <div className="px-3 article-body fs-lg" dangerouslySetInnerHTML={{ __html: article.content }}></div>
            <div className="px-3 py-3 border-top">
              <div className="flex-row ai-center">
                <i className="iconfont icon-article"></i>
                <strong className="text-blue ml-2 fs-lg">相关资讯</strong>
              </div>
              <div className="pt-2">
                {
                  article.related ? article.related.map((item) => {
                    return (
                      <MLink
                        key={item._id}
                        to={`/articles/${item._id}`}
                        className="py-2 mt-2">{item.title}</MLink>
                    )
                  }): null
                }
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
  componentDidMount () {
    const { article } = this.props;
    if (!article) {
      const id = this.props.match.params.id;
      this.props.articleActions.loadArticleInfo(id);
    }
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    article: getArticleById(state, id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    articleActions: bindActionCreators(articleActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
