import React, { useEffect, useState } from 'react'
import style from './SideBar.module.scss'

// mui

import { NavButtons } from '../../../routes/routes';
import { useNavigate } from 'react-router-dom';

// const navBtn


const SideBar = () => {
    const navBtn = NavButtons()
    const [activeNav, setNav] = useState({ path: '/', index: 0 })
    const navigate = useNavigate()
    useEffect(() => {
        navigate(activeNav.path)
    }, [activeNav])

    return (
        <div className={style.sidebar}>
            <div className={style.brand}>Bridgeon</div>
            <div className={style.nav}>

                {navBtn.map((el, index) => index === activeNav.index ? (


                    <li key={index} className={style.active} onClick={() => {
                        setNav({ index: index, path: el.path });
                    }
                    }>
                        <span>{el.icon}</span>
                        <span>{el.title}</span>
                    </li>


                ) :
                    <li key={index} onClick={() => setNav({ index: index, path: el.path })}>
                        <span>{el.icon}</span>
                        <span>{el.title}</span>
                    </li>
                )}
            </div >
        </div>

    )
}

export default SideBar