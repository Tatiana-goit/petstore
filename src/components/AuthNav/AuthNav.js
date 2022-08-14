import React from 'react'
import { Link } from 'react-router-dom'
import s from './AuthNav.module.scss'

export default function AuthNav() {
  return (
    <div>
      <span className={s.links__list}>
        <Link className={s.link} to="/login">
          <span className={s.text}>Login</span>
        </Link>
        <Link className={s.link} to="/registration">
          <span className={s.text}>Registration</span>
        </Link>
      </span>
    </div>
  )
}
