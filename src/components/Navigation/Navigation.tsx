import React from 'react'
import { Link } from 'react-router-dom'
import s from "./Navigation.module.css"

export default function Navigation() {
  return (
    <nav className={s.navigation}>
        <div className={s.wrapper}>
        <Link className={s.link} to="/">Home Page</Link>
        <span className={s.links__list}>
            <Link className={s.link} to="/personal">My Page</Link>
            <Link className={s.link} to="/login">Login</Link>
            <Link className={s.link} to="/registration">Registration</Link>
        </span>
        </div>
    </nav>

  )
}
