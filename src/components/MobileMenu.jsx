import { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/components/mobileMenu.scss";
import { SvgIcon } from "./SvgIcon";

import { cartContext } from "../contexts/cart";

export class MobileMenu extends Component {
  render() {
    return (
      <>
        <div className="mobileMenu">
          <ul className="d-flex algin-items-center justify-content-between p-0 m-0">
            <li>
              <cartContext.Consumer>
                {({ toggleAction, quantity }) => (
                  <>
                    <p
                      to="/"
                      className="mb-0 fs-sm fw-semiBold me-3 mobileMenu-cart"
                      onClick={() => toggleAction()}
                    >
                      <span className="p-2">
                        <SvgIcon name="cart-o" />
                        <span className="mobileMenu-cart-value">
                          {quantity}
                        </span>
                      </span>
                    </p>
                  </>
                )}
              </cartContext.Consumer>
            </li>
            <li>
              <Link to="/" className="mb-0 fs-sm fw-semiBold me-3">
                <span className="p-2">
                  <SvgIcon name="heart-o" />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/" className="mb-0 fs-sm fw-semiBold me-3">
                <span className="p-2">
                  <SvgIcon name="member" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
