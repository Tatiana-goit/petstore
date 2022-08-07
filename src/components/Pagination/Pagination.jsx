import React from 'react'
import ReactPaginate from 'react-paginate';
import s from "./Pagination.module.scss"

export default function Pagination({onChangePage}) {
  return (
    <div>
        <ReactPaginate
        className={s.pagination}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event)=> onChangePage(event.selected+1)}
        pageRangeDisplayed={8}
        pageCount={2}
        
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
