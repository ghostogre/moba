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
    const { title, icon, categories, slot } = this.props;
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
          <div className="swiper-container">
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
    new Swiper('.swiper-container', {
      loop: false
    })
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
  categories: PropTypes.array.isRequired
}

ListCard.defaultProps = {
  title: '',
  icon: 'menu',
  categories: []
}

export default ListCard;
