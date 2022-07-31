import React from 'react'
import s from './MakeOrder.module.css'

export default function MakeOrder() {
  return (
    <div className={s.makeOrder}>
      <p className={s.title}>Make your order</p>
      <div className={s.orderInfo}>
        <input className={s.input} type="text" placeholder="Pets ID" />
        <input className={s.input} type="text" placeholder="Quantity" />
      </div>
      <button className={s.button}>MAKE</button>
    </div>
  )
}
