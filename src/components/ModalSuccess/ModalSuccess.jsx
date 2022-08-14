import React from 'react'
import { useDispatch } from 'react-redux'
import { clearItems } from '../../redux/slices/cartSlice'
import s from './ModalSuccess.module.scss'

export default function ModalSuccess({ active, setActive }) {
  const dispatch = useDispatch()

  const onClickCloseModal = () => {
    setActive(false)
    dispatch(clearItems())
  }

  return (
    <div
      className={active ? [s.modal, s.active].join(' ') : 's.modal'}
      onClick={onClickCloseModal}
    >
      <div className={s.modal__content}>
        <h2 className={s.modal__title}>Thanks for your order! </h2>
        <p className={s.modal__text}>
          We'll contact you really soon - check your mail
        </p>
      </div>
    </div>
  )
}
