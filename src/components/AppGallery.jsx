import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

import "../assets/scss/components/appGallery.scss";
import { AppImage } from "./AppImage";
import { SvgIcon } from "./SvgIcon";

export class AppGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbsSwiper: "",
    };
  }
  render() {
    return (
      <>
        <div className="appGallery">
          <div className="appGallery-main mb-md">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={false}
              spaceBetween={10}
              thumbs={{ swiper: this.state.thumbsSwiper }}
              modules={[FreeMode, Thumbs]}
              className="mySwiper2"
            >
              {this.props.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="appGallery-main-item">
                    <div className="appGallery-main-item-badge">
                      <button>
                        <SvgIcon name="rotate-360" />
                      </button>
                    </div>
                    <AppImage src={image} alt="product" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="appGallery-thumbs">
            <Swiper
              onSwiper={(value) =>
                this.setState((state) => (state.thumbsSwiper = value))
              }
              loop={false}
              spaceBetween={10}
              slidesPerView={4}
              navigation={{
                prevEl: ".slide-prev",
                nextEl: ".slide-next",
              }}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs, Navigation]}
              className="mySwiper"
            >
              {this.props.images.map((image, index) => (
                <SwiperSlide>
                  <div className="appGallery-thumbs-item" key={index}>
                    <AppImage src={image} alt="product" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="appGallery-thumbs-controls">
              <button className="slide-next">
                <SvgIcon name="chevron-left" />
              </button>
              <button className="slide-prev">
                <SvgIcon name="chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
