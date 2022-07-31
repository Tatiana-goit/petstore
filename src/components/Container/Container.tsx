import React from 'react'
import s from "./Container.module.css"

interface IProps {
    children?: React.ReactNode
}

export default function Container({children}: IProps) {
  return (
    <div className={s.container}>{children}</div>
  )
}
