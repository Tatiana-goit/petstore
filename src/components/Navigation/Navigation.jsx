import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'

import s from './Navigation.module.scss'

import AuthNav from '../AuthNav/AuthNav'
import UserMenu from '../UserMenu/UserMenu'
import { getIsAuth } from '../../redux/auth/auth-selector'

export default function Navigation() {
  const isAuth = useSelector(getIsAuth)
  return (
    <nav className={s.navigation}>
      <div className={s.wrapper}>
        <Link className={s.main__link} to="/">
          <Logo />
        </Link>
        {isAuth ? <UserMenu /> : <AuthNav />}
      </div>
    </nav>
  )
}
