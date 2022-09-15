import { Component } from "react";

import "../assets/scss/components/appCartOverlay.scss";
import { cartContext } from "../contexts/cart";
import { CartItem } from "./CartItem";
import { SvgIcon } from "./SvgIcon";

export class AppCartOverlay extends Component {
  render() {
    return (
      <>
        <cartContext.Consumer>
          {({ isToggle, toggleAction, cart, total, quantity }) => (
            <div className={`cartOverlay ${isToggle && "isActive"}`}>
              <div
                className="cartOverlay-bg"
                onClick={() => toggleAction()}
              ></div>
              <div className="cartOverlay-content">
                <div
                  className="cartOverlay-close d-flex align-items-center justify-content-center mx-auto my-5"
                  onClick={() => toggleAction()}
                >
                  <SvgIcon name="close" />
                </div>

                {cart.length ? (
                  <>
                    {cart.map((item) => (
                      <CartItem item={item} key={item.id} />
                    ))}

                    <div className="d-flex align-items-center justify-content-between pt-4">
                      <h3 className="fs-sm">
                        Total: <span className="fw-normal">{total}$</span>
                      </h3>
                      <h3 className="fs-sm">
                        Q: <span className="fw-normal">{quantity}</span>
                      </h3>
                    </div>
                  </>
                ) : (
                  ""
                )}

                {!cart.length && (
                  <div className="cartOverlay-empty text-center text-gray-500">
                    <SvgIcon name="cart" />
                    <p className="fs-sm pt-2">Cart is empty !!</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </cartContext.Consumer>
      </>
    );
  }
}
