import React from 'react'
import logo from "../../assets/images/hamster-logo.svg"
import s from "./Logo.module.scss"

export default function Logo() {
  return (
    <div className={s.logo}>
      <img className={s.logo_image} width="38" src={logo} alt="Pet logo" />
      <div>
        <h1 className={s.title}>Humsters</h1>
        <p className={s.text}>find friends</p>
      </div>
    </div>
  )
}
