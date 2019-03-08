import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import imgBanner from "../assets/images/banner.jpg";
import ProductList from "../components/ProductList";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      featured: [],
      sale: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then(result => result.json())
      .then(result => {
        let featureProducts = result.filter(product => product.category === "featured");
        let saleProducts = result.filter(product => product.category === "sale");
        
        this.setState({
          featured: featureProducts,
          sale: saleProducts
        })
      })
  }

  render() {
    return (
      <Fragment>
        <Banner img={imgBanner} alt="Banner promocional" />
        <ProductList title="Destaques" products={this.state.featured} />
        <ProductList title="Melhores ofertas" products={this.state.sale} />
      </Fragment>
    )
  }
}

export default Home;