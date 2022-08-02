import React from 'react'
import Category from '../Category/Category'
import PetCard from '../PetCard/PetCard'
import Sort from '../Sort/Sort'

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
          <PetCard title="Djungarian hamster" price={3} />
          <PetCard title="Syrian hamster" price={4} />
          <PetCard title="Robkovsky's hamster" price={5} />
          <PetCard title="Campbell's hamster" price={7} />
          <PetCard title="Angora hamster" price={12} />
          <PetCard title="Sungur hamster" price={6} />
          <PetCard title="Field hamster" price={2} />
          <PetCard title="Chinese hamster" price={44} />
        </div>
      </div>
    </div>
  )
}
