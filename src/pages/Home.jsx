import React, { useEffect } from 'react'
import style from './Home.module.scss'
import NavBar from '../components/layouts/navbar/NavBar'
import SideBar from '../components/layouts/sidebar/SideBar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export const Home = () => {
  const nav = useNavigate()
  const path = useLocation()
  useEffect(() => {
    if (path.pathname === "/"||path.pathname === "") {
      nav('/hub')
    }
  }, [path])
  return (
    <main className={style.main}>
      <header className={style.header}>
        <NavBar />
      </header>
      <aside className={style.side}>
        <SideBar />
      </aside>
      <section className={style.section}>
        <Outlet />
      </section>
    </main>
  )
}
