import { Component } from "react";

import "../assets/scss/components/cartItem.scss";
import { AppImage } from "./AppImage";
import { SvgIcon } from "./SvgIcon";

import { cartContext } from "../contexts/cart";

export class CartItem extends Component {
  render() {
    return (
      <>
        <div className="cartItem d-flex align-items-center justify-content-between mb-md">
          <div className="d-flex align-items-center">
            <div className="cartItem-image">
              <AppImage
                alt="product-1"
                src={this.props.item.images[0]}
                width="100%"
                height="auto"
              />
            </div>
            <div className="ms-2">
              <h3 className="fs-xs mb-1">
                {this.props.item.title.substr(0, 15)}
                {this.props.item.title > 15 ? ".." : ""}
              </h3>
              <p className="mb-0 fs-xxs">
                <span className="d-block">
                  <font className="fw-medium">Price</font>:{" "}
                  {this.props.item.price * this.props.item.quantity}$
                </span>
                <span>
                  <font className="fw-medium">Q</font>:{" "}
                  {this.props.item.quantity}
                </span>
              </p>
            </div>
          </div>
          <cartContext.Consumer>
            {({ deleteItem }) => (
              <button
                className="cartItem-delete"
                onClick={() => deleteItem(this.props.item.id)}
              >
                <SvgIcon name="trash" />
              </button>
            )}
          </cartContext.Consumer>
        </div>
      </>
    );
  }
}
