import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserName } from '../../redux/auth/auth-selector'
import { logout } from '../../redux/auth/auth-operation'
import { Link } from 'react-router-dom'
import ButtonCard from '../ButtonCard/ButtonCard'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import s from './UserMenu.module.scss'

export default function UserMenu() {
  const userName = useSelector(getUserName)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      <div className={s.links__list}>
        <Link className={s.link} to="/cart">
          <ButtonCard />
        </Link>
        {/* <Link className={s.link} to="/personal">
          <span className={s.text}>My Page</span>
        </Link> */}

        <div className={s.logout__block}>
          <p className={s.userName}>Welcome, {userName}</p>
          <button type="button" onClick={handleLogout} className={s.buttonExit}>
            <ExitToAppIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
