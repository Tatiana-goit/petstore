import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from '../../redux/slices/filterSlice'
import { setCategoryId, setCurrentPage } from '../../redux/slices/filterSlice'

import Category from '../Category/Category'
import PetCard from '../PetCard/PetCard'
import Sort from '../Sort/Sort'
import Search from '../Search/Search'
import { useEffect } from 'react'
import Sceleton from '../PetCard/Sceleton'
import Pagination from '../Pagination/Pagination'
import { fetchPet, selectPetData } from '../../redux/slices/petSlice'

export default function Content() {
  const dispatch = useDispatch()
  const { items, status } = useSelector(selectPetData)
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    selectFilter,
  )
  
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number))
  }

  useEffect(() => {
    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(fetchPet({ sortBy, order, category, search, currentPage }))

    window.scrollTo(0, 0)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort, searchValue, currentPage])

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
          {status === 'error' ? (
            <div className="content__error-info">
              <h2>Error</h2>
              <p>
                Unfortunately, it wasn't possible to get pets. Please try again
                later
              </p>
            </div>
          ) : (
            <div className="content__items">
              {status === 'loading' ? sceleton : pets}
            </div>
          )}

          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
      </div>
    </div>
  )
}
