import React from 'react'
import {  Outlet} from 'react-router-dom'
import Sidebar from '../Admin_components/Sidebar'
import styles from '../Admin_css/sidebar.module.css'
export default function Admin() {
  
  return (
    <div className={styles.dFlex}>
      <div className={styles.fixedSideBar}>
    <Sidebar/>
    </div>
    <div className={styles.outlet}>

    <Outlet/>
    </div>
    </div>
  )
}
