import { Component } from "react";

import "../assets/scss/components/sizeComponent.scss";

export class SizeComponent extends Component {
  render() {
    return (
      <>
        <div className="sizeCom">
          <ul className="d-flex algin-items-center flex-wrap">
            <li>
              <span>Small</span>
            </li>
            <li>
              <span>Medium</span>
            </li>
            <li className="isActive">
              <span>Large</span>
            </li>
            <li>
              <span>X Large</span>
            </li>
            <li>
              <span>XX Large</span>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
