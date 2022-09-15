import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Component } from "react";
import { AppCard } from "./AppCard";

import "../assets/scss/components/mainSlider.scss";

export class MainSlider extends Component {
  constructor(props) {
    super(props);
    this.breakpoints = {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    };
  }
  render() {
    return (
      <>
        <div className="mainSlider">
          <div className="mainSlider-content">
            <Swiper
              modules={[Pagination]}
              pagination={{
                type: "progressbar",
              }}
              spaceBetween={30}
              slidesPerView={3}
              onSlideChange={() => {}}
              onSwiper={(swiper) => {}}
              navigation={{
                prevEl: ".slide-prev",
                nextEl: ".slide-next",
              }}
              breakpoints={this.breakpoints}
            >
              {this.props.items.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="mainSlider-item h-100">
                    <AppCard item={item} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </>
    );
  }
}
