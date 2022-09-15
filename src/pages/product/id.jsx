import { AppGallery } from "../../components/AppGallery";
import { BreadCrumb } from "../../components/BreadCrumb";
import { MainSlider } from "../../components/MainSlider";
import { AppImage } from "../../components/AppImage";
import StarRatingComponent from "react-star-rating-component";
import { Link, withRouter } from "react-router-dom";
import { SvgIcon } from "../../components/SvgIcon";

import "../../assets/scss/pages/index.scss";

import { SizeComponent } from "../../components/SizeComponent";
import { ColorComponent } from "../../components/ColorComponent";
import { AppCounter } from "../../components/AppCounter";

import { cartContext } from "../../contexts/cart";
import { Component } from "react";
import { $axios } from "../../axios";
import { AppShimmer } from "../../components/AppShimmer";

class ProductParameterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      products: [],
      quantity: 1,
    };
  }

  async componentDidMount() {
    const product = await $axios.get(`/products/${this.props.match.params.id}`);
    if (product) {
      this.setState((state) => (state.product = product.data));
    }
    const products = await $axios.get("/products");
    if (products && products.data.products.length) {
      this.setState((state) => (state.products = products.data.products));
    }
  }
  async componentWillReceiveProps(route) {
    if (route.match.params.id !== this.props.match.params.id) {
      this.setState((state) => (state.product = null));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      const product = await $axios.get(`/products/${route.match.params.id}`);
      if (product) {
        this.setState((state) => (state.product = product.data));
      }
    }
  }

  emitCounter = (value) => {
    if (value) {
      this.setState((state) => (state.quantity = value));
    }
  };

  render() {
    return (
      <>
        <div className="product">
          <BreadCrumb />
          <div className="container pt-lg">
            {!this.state.product && (
              <div className="mb-lg">
                <AppShimmer />
              </div>
            )}
            {this.state.product && (
              <div className="row pt-md mb-md-5">
                <div className="col-lg-6 mb-lg">
                  <AppGallery images={this.state.product.images} />
                </div>
                <div className="col-lg-6 mb-xl">
                  <div className="product-brand mb-md">
                    <AppImage
                      alt="product-1"
                      src="/yeshtery/images/adidas.svg"
                      width="100%"
                      height="auto"
                    />
                  </div>
                  <h3 className="fs-sm fs-semiBold product-padding pt-2">
                    {this.state.product.title}
                  </h3>
                  <Link to="/" className="text-gray-500 fs-sm fw-semiBold">
                    {this.state.product.category}
                  </Link>
                  <div className="product-details b-bottom product-padding pb-2">
                    <div className="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap pb-2">
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={this.state.product.rating}
                        editing={true}
                        renderStarIcon={(index, value) => {
                          return value ? (
                            <SvgIcon name="star" />
                          ) : (
                            <SvgIcon name="star-o" />
                          );
                        }}
                      />
                      <p className="mb-0 fs-sm fw-semiBold pt-2">
                        {this.state.product.rating} of 5
                      </p>
                      <span className="fs-xs text-gray-500 fw-medium">
                        22 Rates
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap">
                      <h3 className="fs-xxl text-primary fw-semiBold mb-0">
                        {this.state.product.price}
                        <span className="fs-lg ms-1 fw-normal">LE</span>
                      </h3>
                      <h4 className="fs-md text-gray-500 text-lineThrough mb-0">
                        {this.state.product.price +
                          this.state.product.price / 2}{" "}
                        LE
                      </h4>
                      <span className="product-discount fs-xs bg-secondary">
                        30% Off
                      </span>
                    </div>
                  </div>
                  <div className="product-size b-bottom py-3">
                    <h3 className="fs-lg mb-md">Size</h3>
                    <SizeComponent />
                  </div>
                  <div className="product-color b-bottom py-3">
                    <h3 className="fs-lg mb-md">Color</h3>
                    <ColorComponent />
                  </div>
                  <div className="product-quantity py-3">
                    <h3 className="fs-lg mb-md">Quantity</h3>
                    <AppCounter emitCounter={this.emitCounter} />
                  </div>
                  <div className="product-controls py-3">
                    <cartContext.Consumer>
                      {({ addToCart }) => (
                        <>
                          <button
                            className="btn btn-primary d-block w-100 mb-md mb-sm-0"
                            onClick={() =>
                              addToCart({
                                ...this.state.product,
                                quantity: this.state.quantity,
                              })
                            }
                          >
                            Add To Cart
                          </button>
                          <button className="btn btn-secondary d-block w-100">
                            Pickup From Store
                          </button>
                        </>
                      )}
                    </cartContext.Consumer>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="container  mb-xl">
            <h3 className="text-primary fs-xl fw-semiBold mb-1">
              Similar Products
            </h3>
            <p className="fs-lg mb-4 text-gray-600">
              You may like these products also
            </p>
            {this.state.products.length ? (
              <>
                <div className="row">
                  <div className="col-12">
                    <MainSlider items={this.state.products} />
                  </div>
                </div>
              </>
            ) : (
              <AppShimmer />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ProductParameterPage);
