import "../assets/scss/components/header.scss";
import { SvgIcon } from "./SvgIcon";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import { Component, createRef } from "react";
import { Search } from "./Search";

import { cartContext } from "../contexts/cart";

export class TheHeader extends Component {
  constructor(props) {
    super(props);
    this.theHeader = createRef();
  }

  componentDidMount() {
    const headroom = new Headroom(this.theHeader.current, {
      offset: 50,
      classes: {
        // when element is initialised
        initial: "theHeader--fixed",
        // when scrolling up
        pinned: "theHeader--pinned",
        // when scrolling down
        unpinned: "theHeader--unpinned",
        // when above offset
        top: "theHeader--top",
        // when below offset
        notTop: "theHeader--not-top",
        // when at bottom of scoll area
        bottom: "theHeader--bottom",
        // when not at bottom of scroll area
        notBottom: "theHeader--not-bottom",
        // when frozen method has been called
        frozen: "theHeader--frozen",
      },
    });

    headroom.init();
  }

  render() {
    return (
      <>
        <div className="theHeader" ref={this.theHeader}>
          <div className="theHeader-top">
            <div className="container">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <span className="theHeader-menuButton me-4">
                    <SvgIcon name="menu" />
                  </span>
                  <Link to="/">
                    <img src="/yeshtery/images/logo.svg" alt="logo" />
                  </Link>
                </div>
                <p to="/" className="fs-xs d-none d-lg-block mb-0">
                  <Link to="/" className="p-2">
                    <SvgIcon name="chevron-left" />
                  </Link>
                  <span>
                    Valentine’s Day Offers! Buy Two Get One Free{" "}
                    <Link to="/" className="fw-medium ms-1 text-underLine">
                      Shop Now
                    </Link>
                  </span>
                  <Link to="/" className="p-2">
                    <SvgIcon name="chevron-right" />
                  </Link>
                </p>
                <div className="d-flex align-items-center justify-content-end">
                  <Link to="/" className="d-flex align-items-center fw-medium">
                    <SvgIcon name="phone" className="me-2" />
                    <span className="fs-xs d-none d-xl-block">Contact Us</span>
                  </Link>
                  <Link
                    to="/"
                    className="d-flex align-items-center fw-medium ms-2 ms-md-4"
                  >
                    <SvgIcon name="cart" className="me-2" />
                    <span className="fs-xs d-none d-xl-block">Track Order</span>
                  </Link>
                  <Link
                    to="/"
                    className="d-flex align-items-center fw-medium ms-2 ms-md-4"
                  >
                    <SvgIcon name="location" className="me-2" />
                    <span className="fs-xs d-none d-xl-block">
                      Find A Store
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="theHeader-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 col-8">
                  <div className="theHeader-search">
                    <Search />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-4">
                  <div className="theHeader-center-logo">
                    <img
                      src="/yeshtery/images/adidas.svg"
                      alt="adidas"
                      className="mx-lg-auto ms-auto img-max d-block"
                    />
                  </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="theHeader-controls d-flex align-items-center justify-content-md-end">
                    <cartContext.Consumer>
                      {({ toggleAction, quantity }) => (
                        <>
                          <p
                            className="mb-0 fs-sm fw-semiBold me-3 theHeader-cartButton"
                            onClick={() => toggleAction()}
                          >
                            <span className="p-2 theHeader-cart">
                              <SvgIcon name="cart-o" />
                              <span className="theHeader-cart-value">
                                {quantity}
                              </span>
                            </span>
                            <span className="fs-semiBold d-none d-xl-inline-block">
                              Cart
                            </span>
                          </p>
                        </>
                      )}
                    </cartContext.Consumer>

                    <Link to="/" className="mb-0 fs-sm fw-semiBold me-3">
                      <span className="p-2">
                        <SvgIcon name="heart-o" />
                      </span>
                      <span className="fs-semiBold d-none d-xl-inline-block">
                        Wishlist
                      </span>
                    </Link>
                    <Link to="/" className="mb-0 fs-sm fw-semiBold">
                      <span className="p-2">
                        <SvgIcon name="member" />
                      </span>
                      <span className="fs-semiBold d-none d-xl-inline-block">
                        Login
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="theHeader-bottom scrollBar">
            <div className="container">
              <ul className="d-flex align-items-center justify-content-between">
                <li>
                  <Link to="/" className="fs-sm">
                    Men
                  </Link>
                </li>
                <li>
                  <Link to="/" className="fs-sm">
                    Women
                  </Link>
                </li>
                <li>
                  <Link to="/" className="fs-sm">
                    Unisex
                  </Link>
                </li>
                <li>
                  <Link to="/" className="fs-sm">
                    Kids
                  </Link>
                </li>
                <li>
                  <Link to="/" className="fs-sm">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link to="/" className="fs-sm">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link to="/" className="fs-sm">
                    Offers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
