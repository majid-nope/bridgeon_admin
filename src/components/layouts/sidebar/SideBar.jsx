import React from 'react'
import style from './SideBar.module.scss'
const SideBar = () => {
    return (
        <div className={style.sidebar}>
           <div className={style.brand}>Bridgeon</div>
           <div className={style.nav}></div>
        </div>

    )
}

export default SideBar