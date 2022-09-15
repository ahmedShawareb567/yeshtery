import { Component } from "react";
import { SvgIcon } from "./SvgIcon";

import "../assets/scss/components/search.scss";

export class Search extends Component {
  render() {
    return (
      <>
        <div className="search">
          <input type="text" placeholder="Search" />
          <SvgIcon name="search" className="search-icon" />
        </div>
      </>
    );
  }
}
