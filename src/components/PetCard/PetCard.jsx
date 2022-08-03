import React from 'react'
import { useState } from 'react'

export default function PetCard({ title, price }) {
  const [petCount, setPetCount] = useState(0)

  const onClickAdd=()=> {
    setPetCount(petCount+1)
  }
  return (
    <div className="pet-block">
      <img
        className="pet-block__image"
        src="https://goodzoo.com.ua/photos/offers/1fe37b820423011eba054bf09780e3b46.jpg"
        alt="Humster"
      />
      <h4 className="pet-block__title">{title}</h4>
      <div className="pet-block__selector">
        <ul>
          <li className="active">male</li>
          <li>female</li>
        </ul>
        <ul>
          <li className="active">grey</li>
          <li>gold</li>
          <li>white</li>
        </ul>
      </div>
      <div className="pet-block__bottom">
        <div className="pet-block__price">от {price} $</div>
        <div onClick={onClickAdd} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="grey"
            />
          </svg>
          <span>ADD</span>
          <i>{petCount}</i>
        </div>
      </div>
    </div>
  )
}
