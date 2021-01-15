import * as React from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import style from "../styles/Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Header />
      <Navbar />
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
