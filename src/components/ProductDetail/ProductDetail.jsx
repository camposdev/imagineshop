import React, { Fragment } from "react";
import "./style.scss";
import Button from "../../components/Button";
import Title from "../../components/Title";
import ProductList from "../ProductList";
import Currency from 'react-currency-formatter';

const ProductDetail = props => {
  return (
    <Fragment>
      <section className="product-detail">
        <div className="container">  
          <div className="product-detail-cols">
            <div className="product-detail-photo">
              <img src={props.productItem.photo} alt={props.productItem.title}/>
            </div>

            <div className="product-detail-info">
              <h1 className="product-detail-title">{props.productItem.title}</h1>
              <p className="product-detail-price"><Currency quantity={props.productItem.price} currency="BRL" /></p>
              <small className="product-detail-payment">{props.productItem.installments}x de <Currency quantity={props.productItem.price / props.productItem.installments} currency="BRL" /> sem juros</small>
              <Button icon="shopping-cart">Adicionar ao carrinho</Button>
              <div className="product-detail-overview" dangerouslySetInnerHTML={{__html: props.productItem.overview}}></div>
            </div>
          </div>

          <section className="product-detail-description">
            <Title>Informações do produto</Title>
            <div dangerouslySetInnerHTML={{__html: props.productItem.description}}></div>
          </section>

          <ProductList title="Veja também" products={props.productList} />
        </div>
      </section>
    </Fragment>
  )
}

export default ProductDetail;