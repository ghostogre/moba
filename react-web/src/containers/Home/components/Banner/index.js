import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

class Banner extends Component {
  render() {
    const { data = [] } = this.props
    return (
      <div className="swiper-container" id="banner-swiper">
        <div className="swiper-wrapper">
          {
            data.map((item) => (
              <div className="swiper-slide" key={item}>
                <a href="#!">
                  <img className="w-100" alt="" src="https://t12.baidu.com/it/u=4191434507,2471911807&fm=76"/>
                </a>
              </div>)
            )
          }
        </div>
        <div className="swiper-pagination pagination-home text-right px-3 pb-1"></div>
      </div>
    );
  }
  componentDidMount () {
    new Swiper('#banner-swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}

export default Banner;