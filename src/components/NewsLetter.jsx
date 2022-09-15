import { Component } from "react";

import "../assets/scss/components/newsLetter.scss";
import { SvgIcon } from "./SvgIcon";

export class NewsLetter extends Component {
  render() {
    return (
      <>
        <div className="newsLetter">
          <input type="text" placeholder="Enter Your Mail" />
          <button className="newsLetter-button">
            <span className="me-2">Subscribe</span>
            <SvgIcon name="newsLetter" />
          </button>
        </div>
      </>
    );
  }
}
