import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import imgBanner from "../assets/images/banner-page.jpg";
import ProductDetail from "../components/ProductDetail";

class ProductPage extends Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      product: {}
    }
  }

  componentDidMount() {
    this.getProductItem();
    this.getProductList();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id) {
      this.getProductItem();
    }
  }

  getProductItem() {
    fetch(`http://localhost:3000/products/${this.props.match.params.id}`)
      .then(result => result.json())
      .then(result => {
        this.setState({ product: result });
      });
  }

  getProductList() {
    fetch("http://localhost:3000/products")
      .then(result => result.json())
      .then(result => {
        let featureProducts = result.filter(product => product.category === "featured");
        
        this.setState({
          productList: featureProducts
        });
      });
  }

  render() {
    return (
      <Fragment>
        <Banner img={imgBanner} alt="Banner promocional" />
        <ProductDetail productItem={this.state.product} productList={this.state.productList} />
      </Fragment>
    )
  }
}

export default ProductPage;