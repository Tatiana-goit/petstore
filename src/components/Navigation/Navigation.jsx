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
          <Link className={s.link} to="/personal"><ButtonCard/><span className={s.text}>My Page</span></Link>
          <Link className={[s.link, s.link_display].join(' ')} to="/login"><span className={s.text}>Login</span></Link>
          <Link className={[s.link, s.link_display].join(' ')} to="/registration"><span className={s.text}>Registration</span></Link>
        </span>
        </div>
    </nav>

  )
}
