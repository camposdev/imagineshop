import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Products from "./pages/Products";

library.add(fab, faShoppingCart);

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/about/" component={About} />
          <Route path="/products/" component={Products} />
          <Footer />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
