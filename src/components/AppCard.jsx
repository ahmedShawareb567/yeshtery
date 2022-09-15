import { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import { AppImage } from "./AppImage";
import { SvgIcon } from "./SvgIcon";

import "../assets/scss/components/appCard.scss";

export class AppCard extends Component {
  render() {
    return (
      <>
        <div className="appCard h-100">
          <div className="appCard-badge">
            <button>
              <SvgIcon name="rotate-360" />
            </button>
          </div>
          <div className="appCard-header">
            <AppImage
              alt="product-1"
              src={this.props.item.images[0]}
              width="100%"
              height="auto"
            />
          </div>
          <div className="appCard-body">
            <Link to={`/product/${this.props.item.id}`}>
              <h3 className="fs-xs">
                {this.props.item.title.substr(0, 30)}
                {this.props.item.title.length > 30 ? "..." : ""}
              </h3>
            </Link>
            <div className="d-flex align-items-center justify-content-between pt-2">
              <div>
                <h4 className="text-primary fs-lg">
                  {this.props.item.price} <span className="fs-xs">LE</span>
                </h4>
                <h5 className="mb-0 fs-xs text-gray-500">
                  <span className="text-lineThrough">
                    {this.props.item.price + this.props.item.price / 2} LE
                  </span>{" "}
                  <span className="appCard-discount">50%</span>
                </h5>
              </div>
              <div className="appCard-brand">
                <AppImage
                  alt="adidas"
                  src="/images/adidas.svg"
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center pt-2 pb-1">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={this.props.item.rating}
                editing={true}
                renderStarIcon={(index, value) => {
                  return value ? (
                    <SvgIcon name="star" />
                  ) : (
                    <SvgIcon name="star-o" />
                  );
                }}
              />
              <h4 className="mb-0 fs-xs ms-2 pt-2">
                {this.props.item.rating} of 5
              </h4>
            </div>
            <p className="mb-0 fs-xxs text-center">
              <span className="fw-medium">Pickup From: </span>
              <span className="fw-semiBold">Genena Mall</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}
