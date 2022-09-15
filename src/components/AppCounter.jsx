import { Component } from "react";

import "../assets/scss/components/appCounter.scss";
import { SvgIcon } from "./SvgIcon";

export class AppCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
  }

  addCounter = () => {
    this.setState((state) => (state.counter += 1));
    this.props.emitCounter(this.state.counter + 1);
  };

  minusCounter = () => {
    this.setState((state) => {
      if (state.counter > 1) {
        this.props.emitCounter(this.state.counter - 1);
        return (state.counter -= 1);
      }
      this.props.emitCounter(1);
      return (state.counter = 1);
    });
  };

  render() {
    return (
      <>
        <div className="appCounter d-flex align-items-center justify-content-between">
          <button
            className="appCounter-minus d-flex align-items-center justify-content-center"
            onClick={this.minusCounter}
          >
            <SvgIcon name="minus" />
          </button>
          <span className="fs-sm fw-bold">{this.state.counter}</span>
          <button
            className="appCounter-add d-flex align-items-center justify-content-center"
            onClick={this.addCounter}
          >
            <SvgIcon name="add" />
          </button>
        </div>
      </>
    );
  }
}
