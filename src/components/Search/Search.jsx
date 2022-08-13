import React from 'react'
import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'
import { useState, useRef, useCallback } from 'react'
import { setSearchValue } from '../../redux/slices/filterSlice'
import s from './Search.module.scss'

export default function Search() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const inputRef = useRef()

  const onClickClear = () => {
    dispatch(setSearchValue(''))
    setValue('')
    inputRef.current.focus()
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str))
    }, 1000),
    [],
  )

  const onChangeInput = (event) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={s.wrapper}>
      <svg
        className={s.icon}
        enableBackground="new 0 0 32 32"
        id="Editable-line"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={s.input}
        type="text"
        placeholder="Search pet ..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={s.close}
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="18" x2="6" y1="6" y2="18" />
          <line x1="6" x2="18" y1="6" y2="18" />
        </svg>
      )}
    </div>
  )
}
