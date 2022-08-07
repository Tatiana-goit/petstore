import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import ButtonCard from "../ButtonCard/ButtonCard"
import s from "./Navigation.module.scss"

export default function Navigation() {
  return (
    <nav className={s.navigation}>
        <div className={s.wrapper}>
        <Link className={s.main__link} to="/"><Logo/></Link>
        <span className={s.links__list}>
          <Link className={s.link} to="/personal"><ButtonCard/>My Page</Link>
          <Link className={[s.link, s.link_display].join(' ')} to="/login">Login</Link>
          <Link className={[s.link, s.link_display].join(' ')} to="/registration">Registration</Link>
        </span>
        </div>
    </nav>

  )
}
