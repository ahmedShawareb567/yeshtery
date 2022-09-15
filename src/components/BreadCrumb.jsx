import { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/scss/components/breadCrumb.scss";

export class BreadCrumb extends Component {
  render() {
    return (
      <>
        <div className="breadCrumb">
          <div className="container">
            <ul className="d-flex align-items-center flex-wrap">
              <li>
                <Link to="/">Men</Link>
              </li>
              <span>/</span>
              <li>
                <Link to="/">Clothing</Link>
              </li>
              <span>/</span>
              <li>
                <Link to="/">Tops</Link>
              </li>
              <span>/</span>
              <li>
                <Link to="/">Adidas</Link>
              </li>
              <span>/</span>
              <li>
                <Link to="/" className="current">
                  Adidas Black T-Shirt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
