import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"
import style from "../styles/Layout.module.scss"

const Layout = ({ children, navbar }) => {
  return (
    <div className={style.container}>
      <Header />
      {navbar}
      <div className={style.area}>
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
