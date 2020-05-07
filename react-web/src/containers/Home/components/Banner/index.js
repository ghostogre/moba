import React, { Component } from 'react';
import MSwiper from '../../../../components/MSwiper';

class Banner extends Component {
  render() {
    const { data = [] } = this.props;
    const slots = data.map((item) => (
      <div className="swiper-slide" key={item}>
        <a href="#!">
          <img className="w-100" alt="" src={item.image}/>
        </a>
      </div>)
    );
    return (
      <MSwiper
        swiperName="banner-swiper"
        slotArray={slots}
        swiperOptions={{
          clickable: true
        }}
      ></MSwiper>
    );
  }
}

export default Banner;
