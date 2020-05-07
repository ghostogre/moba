import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import PropTypes from 'prop-types';

// 除此之外，另一种方式类似AsyncComponent
class MSwiper extends Component {
  render() {
    const { slotArray, swiperName } = this.props;
    return (
      <div className="swiper-container" id={swiperName}>
        <ul className="swiper-wrapper">
          {
            slotArray.map((item, index) => (
              <li key={index} className="swiper-slide">
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
  componentDidMount () {
    const { swiperName, swiperOptions = {}, slideChange } = this.props;
    this.swiper = new Swiper(`#${swiperName}`, {
      on: {
        slideChangeTransitionStart () {
          slideChange(this.realIndex);
        }
      },
      ...swiperOptions
    });
  }
  // componentDidUpdate 来替代 componentWillReceiveProps
  // 这两个周期分别在组件接受新的props前后触发
  // 不能在这之中更新state
  // props如果是引用数据类型的话，当这个引用数据类型的地址不发生变化时，是不会触发componentWillReceiveProps
  componentDidUpdate (prevProps) {
    const { index, slotArray } = this.props;
    const { slotArray: prevSlots, index: prevIndex } = prevProps;
    if (slotArray !== prevSlots) { // 动态数据更新
      this.swiper.update();
    }
    if (index !== prevIndex) {
      this.swiper.slideTo(index);
    }
  }
}

MSwiper.propTypes = {
  swiperName: PropTypes.string.isRequired,
  slotArray: PropTypes.array.isRequired
}

MSwiper.defaultProps = {
  slotArray: [],
  swiperName: '',
  index: 0,
  slideChange: () => {}
}

export default MSwiper;