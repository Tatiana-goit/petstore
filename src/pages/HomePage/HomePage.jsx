// import '../../scss/app.scss'
// import Content from '../../components/Content/Content'
// // import Footer from "../../components/Footer/Footer"

// export default function HomePage() {
//   return <Content />
// }

import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from '../../redux/slices/filterSlice'
import { setCategoryId, setCurrentPage } from '../../redux/slices/filterSlice'

import Category from '../../components/Category/Category'
import PetCard from '../../components/PetCard/PetCard'
import Sort from '../../components/Sort/Sort'
import Search from '../../components/Search/Search'
import { useEffect } from 'react'
import Sceleton from '../../components/PetCard/Sceleton'
import Pagination from '../../components/Pagination/Pagination'
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
              <h2 className="content__error-title">Error</h2>
              <p className="content__error-text">
                Unfortunately, it wasn't possible to get humsters. 
              </p>
              <p className="content__error-text">
              Please try again later
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
