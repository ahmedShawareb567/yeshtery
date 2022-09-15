import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { TheHeader } from "./components/TheHeader";
import { TheFooter } from "./components/TheFooter";
import { MobileMenu } from "./components/MobileMenu";
import { Component } from "react";
import { cartContext } from "./contexts/cart";
import { AppCartOverlay } from "./components/AppCartOverlay";
import ProductParameterPage from "./pages/product/id";

export class App extends Component {
  constructor(props) {
    super(props);

    this.addToCart = (product) => {
      this.setState(
        (state) => {
          const currentProduct = state.cart.find((i) => i.id === product.id);
          if (currentProduct) {
            currentProduct.quantity += product.quantity;
            return state;
          }
          state.isToggle = !state.isToggle;
          return state.cart.push(product);
        },
        () => {
          this.setState((state) => (state.isToggle = true));
          this.calculateTotalAndQuantity();
        }
      );
    };

    this.deleteItem = (id) => {
      const cart = this.state.cart;
      const findProductIndex = cart.findIndex((i) => i.id === id);
      cart.splice(findProductIndex, 1);
      this.setState(
        (state) => (state.cart = cart),
        () => {
          this.calculateTotalAndQuantity();
        }
      );
    };

    this.calculateTotalAndQuantity = () => {
      let sum = 0,
        quantity = 0;

      this.state.cart.forEach((item) => {
        sum += item.quantity * item.price;
        quantity += item.quantity;
      });

      this.setState((state) => (state.total = sum));
      this.setState((state) => (state.quantity = quantity));
    };

    this.toggleAction = () => {
      this.setState((state) => (state.isToggle = !state.isToggle));
    };

    this.state = {
      isToggle: false,
      cart: [],
      quantity: 0,
      total: 0,
      addToCart: this.addToCart,
      toggleAction: this.toggleAction,
      deleteItem: this.deleteItem,
    };
  }
  render() {
    return (
      <>
        <cartContext.Provider value={this.state}>
          <div className="app">
            <Router basename="/yeshtery">
              <TheHeader />
              <div className="app-content">
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/product/1" />
                  </Route>
                  <Route path="/product/:id">
                    <ProductParameterPage />
                  </Route>
                </Switch>
              </div>
              <TheFooter />
              <div className="d-block d-lg-none">
                <MobileMenu />
              </div>
              <AppCartOverlay />
            </Router>
          </div>
        </cartContext.Provider>
      </>
    );
  }
}

export default App;
