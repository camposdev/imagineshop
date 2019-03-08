import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import imgBanner from "../assets/images/banner-page.jpg";
import ProductList from "../components/ProductList";

class Products extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then(result => result.json())
      .then(result => {        
        this.setState({
          products: result,
        })
      })
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <Banner img={imgBanner} alt="Banner promocional" style={{marginBottom: 30}} />
          <ProductList title="Produtos" products={this.state.products} />
        </div>
      </Fragment>
    )
  }
}

export default Products;