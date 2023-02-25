import React from 'react'
import style from './Home.module.scss'
import NavBar from '../components/layouts/navbar/NavBar'
import SideBar from '../components/layouts/sidebar/SideBar'

export const Home = () => {
  return (
    <main className={style.main}>
      <header className={style.header}>
        <NavBar />
      </header>
      <aside className={style.side}>
        <SideBar />
      </aside>
      <section className={style.section}>
        
      </section>
    </main>
  )
}
