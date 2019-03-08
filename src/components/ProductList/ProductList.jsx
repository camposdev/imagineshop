import React, { Component } from "react";
import Title from "../Title";
import "./style.scss"
import Product from "../Product";

class ProductList extends Component {
  render() {
    return (
      <section className="product-list">
        <div className="container">
          {this.props.title && <Title>{this.props.title}</Title>}

          <article className="product-list-items">
            {this.props.products.map(product => (
              <Product item={product} key={product.id} />
            ))}
          </article>
        </div>
      </section>
    )
  }
}

export default ProductList;