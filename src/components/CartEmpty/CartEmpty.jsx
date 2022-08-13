import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/images/empty-shopping-cart.png'

export default function CartEmpty() {
  return (
    <div className="wrapper">
      <div className="cart cart--empty">
        <h2>Cart is empty</h2>
        <p>
          You probably didn't order.
          <br /> To place an order, go to the main page.
        </p>
        <img src={image} alt="Empty cart" />

        <Link className="button button--black" to="/">
          <span>Back</span>
        </Link>
      </div>
    </div>
  )
}
