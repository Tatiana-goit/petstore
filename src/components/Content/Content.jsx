import React from 'react'
import Category from '../Category/Category'
import PetCard from '../PetCard/PetCard'
import Sort from '../Sort/Sort'
import Search from '../Search/Search'
// import pets from '../../assets/pets.json'
import { useState, useEffect, useContext } from 'react'
import Sceleton from '../PetCard/Sceleton'
import { SearchContext } from '../../App'

export default function Content() {
  const { searchValue } = useContext(SearchContext)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState({
    name: 'popularity',
    sortProperty: 'rating',
  })

  useEffect(() => {
    setIsLoading(true)

    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''
    
    fetch(
      `https://62ecf1bba785760e6760a342.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue])

  const pets = items.map((obj) => <PetCard key={obj.id} {...obj} />)

  const sceleton = [...new Array(8)].map((_, index) => <Sceleton key={index} />)

  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Category
              value={categoryId}
              onChangeCategory={(i) => setCategoryId(i)}
            />
            <Search />
            <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
          </div>
          <h2 className="content__title">All pets</h2>
          <div className="content__items">{isLoading ? sceleton : pets}</div>
        </div>
      </div>
    </div>
  )
}
