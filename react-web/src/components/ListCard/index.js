import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import Card from '../Card';

class ListCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
  }
  render() {
    const { title, icon, categories, slot, swiperName } = this.props;
    const { activeIndex } = this.state;
    return (
      <Card title={title} icon={icon}>
        <ul className="nav flex-row jc-between">
          {
            categories.map((category, i) => {
              return (
                <li key={i} className={activeIndex === i ? 'nav-item active': 'nav-item'} onClick={this.switchCategory.bind(this, i)}>
                  <div className="nav-link">{category.name}</div>
                </li>
              )
            })
          }
        </ul>
        <div className="pt-3" style={{boxSizing: 'border-box'}}>
          <div className="swiper-container" id={swiperName}>
            <div className="swiper-wrapper">
              {
                categories.map((category, i) => {
                  return (slot ? slot(category, i) : null);
                })
              }
            </div>
          </div>
        </div>
      </Card>
    );
  }
  componentDidMount () {
    // 类名需要唯一，不然this.swiper会是一个Swiper数组
    // 当一个页面多个swiper的时候需要使用id进行区分
    // 可以给每个容器加上ID或Class区分，要保留默认的类名swiper-container。
    const { swiperName } = this.props;
    this.swiper = new Swiper(`#${swiperName}`, {
      loop: false,
      on: {
        slideChange: () => {
          this.setState({
            activeIndex: this.swiper.realIndex
          })
        }
      }
    });
  }
  // 切换分类
  switchCategory = (index) => {
    this.setState({
      activeIndex: index
    });
    this.swiper.slideTo(index);
  }
}

ListCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  swiperName: PropTypes.string
}

ListCard.defaultProps = {
  title: '',
  icon: 'menu',
  categories: [],
  swiperName: 'listCard-swiper'
}

export default ListCard;
