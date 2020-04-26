import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MSwiper from '../MSwiper';
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
          <MSwiper
            swiperName={swiperName}
            slideChange={this.switchCategory}
            index={activeIndex}
            slotArray={
              categories.map((category, i) => {
                return (slot ? slot(category, i) : null);
              })
            }></MSwiper>
        </div>
      </Card>
    );
  }
  // 切换分类
  switchCategory = (index) => {
    this.setState({
      activeIndex: index
    })
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
