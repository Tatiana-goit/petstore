import React from 'react'
import { useState } from 'react'
import * as api from '../../services/OrderApi'
import s from './FindOrder.module.css'

interface IOrder {
  id: number
  petId: number
  quantity: number
  shipDate: string
  status: string
  complete: boolean
}

export default function FindOrder() {
  const [orderId, setOrderId] = React.useState<string | undefined>('')
  const [orderIdInfo, setOrderIdInfo] = useState<IOrder>()

  const fetchOrderId = () => {
    api.findOrderById(orderId).then((data) => setOrderIdInfo(data))
    setOrderId('')
  }

  return (
    <div className={s.findOrder}>
      <p className={s.title}>Find your order</p>
      <div className={s.search}>
        <input
          className={s.input}
          type="text"
          placeholder="Enter your orderID"
          value={orderId}
          onChange={(e) => {
            setOrderId(e.target.value)
          }}
        />
        <button className={s.button} onClick={fetchOrderId}>
          {' '}
          FIND
        </button>
      </div>
      {orderIdInfo && (
        <div className={s.result}>
          <ul className={s.list}>
            <li className={s.info}>Order N: {orderIdInfo.id}</li>
            <li className={s.info}>Pet ID: {orderIdInfo.petId}</li>
            <li className={s.info}>Date: {orderIdInfo.shipDate}</li>
            <li className={s.info}>Statis: {orderIdInfo.status}</li>
            <li className={s.info}>Quantity: {orderIdInfo.quantity}</li>
          </ul>
        </div>
      )}
    </div>
  )
}
