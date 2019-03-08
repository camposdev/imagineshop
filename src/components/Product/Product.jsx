import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Currency from 'react-currency-formatter';

const Product = props => {
  return (
    <article className="product-card">
      <Link to={`/product/${props.item.id}`}>
        <img src={props.item.photo} alt={props.item.title}/>
        <h4 className="product-card-title">{props.item.title}</h4>
        <p className="product-card-price"><Currency quantity={props.item.price} currency="BRL" /></p>
        <small className="product-card-payment">{props.item.installments}x de <Currency quantity={props.item.price / props.item.installments} currency="BRL" /> sem juros</small>
      </Link>
    </article>
  )
}

export default Product;