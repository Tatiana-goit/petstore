import React from 'react'
import s from './FindOrder.module.css'

export default function FindOrder() {
  return (
    <div className={s.findOrder}>
      <p className={s.title}>Find your order</p>
      <div className={s.search}>
        <input className={s.input} type="text" placeholder='Enter your orderID' />
        <button className={s.button}> FIND</button>
      </div>
    </div>
  )
}
