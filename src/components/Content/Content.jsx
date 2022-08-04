import React from 'react'
import Category from '../Category/Category'
import PetCard from '../PetCard/PetCard'
import Sort from '../Sort/Sort'
import pets from '../../assets/pets.json'

export default function Content() {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Category />
          <Sort />
        </div>
        <h2 className="content__title">All pets</h2>
        <div className="content__items">
          {pets.map((obj) => (
            <PetCard
              key={obj.id}
              {...obj}
              // id={obj.id}
              // title={obj.title}
              // image={obj.image}
              // price={obj.price}
              // genders={obj.genders}
              // colors={obj.colors}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
