import "../assets/scss/components/footer.scss";
import { Link } from "react-router-dom";
import { NewsLetter } from "./NewsLetter";

export const TheFooter = () => {
  return (
    <>
      <div className="theFooter pt-xl">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="theFooter-border-right pe-md-5">
                <Link to="/" className="text-white mb-4 d-block">
                  <img src="/images/logo-secondary.svg" alt="logo" />
                </Link>
                <p className="fs-sm fw-light">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.{" "}
                </p>
                <p className="fs-sm fw-light">
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit, sed dia m nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                  minim veniam, quis nostrud exerci tation ullamcorper suscipit
                  lobortis nisl ut aliquip ex ea commodo consequat.
                </p>
                <p className="fs-sm fw-light">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <p className="fs-md">Subscribe to our newsletter</p>

              <div className="mb-2">
                <NewsLetter />
              </div>

              <div className="row pt-4">
                <div className="col-md-7 col-6">
                  <div className="theFooter-links theFooter-border-right">
                    <ul>
                      <li>
                        <Link to="/" className="fs-sm" title="About Us">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="fs-sm" title="Contact Us">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="fs-sm" title="Track Order">
                          Track Order
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="fs-sm"
                          title="Terms & Conditions"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="fs-sm" title="Privacy Policy">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="fs-sm" title="Sell With Us">
                          Sell With Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="fs-sm"
                          title="Shipping And Returns"
                        >
                          Shipping And Returns
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5 col-6">
                  <div className="theFooter-socials">
                    <ul>
                      <li>
                        <Link
                          to="/"
                          title="facebook"
                          className="d-flex align-items-center"
                        >
                          <img src="/images/facebook.png" alt="facebook" />
                          <span className="fs-sm ms-2">/YESHTERY</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          title="linkedIn"
                          className="d-flex align-items-center"
                        >
                          <img src="/images/linkedIn.png" alt="linkedIn" />
                          <span className="fs-sm ms-2">/YESHTERY</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          title="instagram"
                          className="d-flex align-items-center"
                        >
                          <img src="/images/instagram.png" alt="instagram" />
                          <span className="fs-sm ms-2">/YESHTERY</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          title="twitter"
                          className="d-flex align-items-center"
                        >
                          <img src="/images/twitter.png" alt="twitter" />
                          <span className="fs-sm  ms-2">/YESHTERY</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="theFooter-border-top py-4">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4">
                <p className="mb-0 fs-sm text-center text-lg-start mb-3 mb-lg-0">
                  © 2021{" "}
                  <Link to="/" title="yeshtery">
                    yeshtery
                  </Link>
                  , all rights reserved.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src="/images/cashOnDelivery.png"
                    alt="cashOnDelivery"
                    className="img-max mx-2"
                  />
                  <img
                    src="/images/visa.png"
                    alt="visa"
                    className="img-max mx-2"
                  />
                  <img
                    src="/images/masterCard.png"
                    alt="masterCard"
                    className="img-max mx-2"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex justify-content-lg-end justify-content-center align-items-center py-3 py-lg-0">
                  <p className="fs-sm mb-0 me-2">Powered By</p>
                  <Link to="/">
                    <img
                      src="/images/nasnav.png"
                      alt="nasnav"
                      className="img-max"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
