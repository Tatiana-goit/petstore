import React from 'react'
import s from './ModalError.module.scss'

export default function ModalError({ active, setActive }) {
  const onClickCloseModal = () => {
    setActive(false)
  }

  return (
    <div className={active ? [s.modal, s.active].join(' ') : 's.modal'}>
      <div className={s.modal__content}>
        <span className={s.modal__x} onClick={onClickCloseModal}>
          &times;
        </span>
        <h2 className={s.modal__title}>Possible server errors</h2>
        <p className={s.modal__text}>To test functionality use Login</p>
        <p className={s.modal__text}>email: tatianat@gmail.com</p>
        <p className={s.modal__text}>password: 123123123</p>
      </div>
    </div>
  )
}
