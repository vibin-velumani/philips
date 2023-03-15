import React from 'react'
import Cards from './Admin_Analytics/Cards'
import BasicTable from './Admin_Analytics/Table'
import style from '../Admin_css/dashboard.module.css'
export default function DashBoard() {
  return (
    <div className={style.MainDash}>
    <h1>Dashboard</h1>

     <Cards/>
      <BasicTable/>
    </div>
  )
}
