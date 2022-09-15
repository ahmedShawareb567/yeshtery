import { Component } from "react";
import { AppImage } from "./AppImage";

import "../assets/scss/components/colorComponent.scss";

export class ColorComponent extends Component {
  render() {
    return (
      <>
        <div className="colorCom">
          <ul className="d-flex algin-items-center flex-wrap">
            <li className="isActive">
              <AppImage
                alt="product-1"
                src="/yeshtery/images/product/product-2.png"
                width="100%"
                height="auto"
              />
            </li>
            <li>
              <AppImage
                alt="product-1"
                src="/yeshtery/images/product/product-3.png"
                width="100%"
                height="auto"
              />
            </li>
          </ul>
        </div>
      </>
    );
  }
}
