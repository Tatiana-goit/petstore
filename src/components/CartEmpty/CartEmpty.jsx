import React from 'react'
import { Link } from 'react-router-dom'

export default function CartEmpty() {
  return (
    <div className="cart cart--empty">
      <h2>
        Cart is empty
        <span>😕</span>
      </h2>
      <p>
        You probably didn't order.
        <br /> To place an order, go to the main page.
      </p>
      <img src="" alt="Empty cart" />
      <Link className="button button--black" to="/">
        <span>Back</span>
      </Link>
    </div>
  )
}
