import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId } from '../../redux/slices/filterSlice'

import Category from '../Category/Category'
import PetCard from '../PetCard/PetCard'
import Sort from '../Sort/Sort'
import Search from '../Search/Search'
// import pets from '../../assets/pets.json'
import { useState, useEffect, useContext } from 'react'
import Sceleton from '../PetCard/Sceleton'
import { SearchContext } from '../../App'
import Pagination from '../Pagination/Pagination'

export default function Content() {
  const dispatch = useDispatch()
  const categoryId = useSelector((state) => state.filter.categoryId)
  const sortType = useSelector((state) => state.filter.sort.sortProperty)

  const { searchValue } = useContext(SearchContext)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  useEffect(() => {
    setIsLoading(true)

    const sortBy = sortType.replace('-', '')
    const order = sortType.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    // fetch(
    //   `https://62ecf1bba785760e6760a342.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    // )
    //   .then((res) => res.json())
    //   .then((arr) => {
    //     setItems(arr)
    //     setIsLoading(false)
    //   })

    axios
      .get(
        `https://62ecf1bba785760e6760a342.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data)
        setIsLoading(false)
      })

    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, currentPage])

  const pets = items.map((obj) => <PetCard key={obj.id} {...obj} />)

  const sceleton = [...new Array(8)].map((_, index) => <Sceleton key={index} />)

  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Category value={categoryId} onChangeCategory={onChangeCategory} />
            <Search />
            <Sort />
          </div>
          <h2 className="content__title">All pets</h2>
          <div className="content__items">{isLoading ? sceleton : pets}</div>
          <Pagination onChangePage={(number) => setCurrentPage(number)} />
        </div>
      </div>
    </div>
  )
}
