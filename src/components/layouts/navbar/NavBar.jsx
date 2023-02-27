import React from 'react'
import style from './NavBar.module.scss'
import {Avatar} from '@mui/material'
const NavBar = () => {
    return (
        <nav className={style.nav}>
            <Avatar sx={{marginRight:'5px'}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </nav>

    )
}

export default NavBar