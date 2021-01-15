import * as React from "react"
import "../styles/GenericNavbar.module.scss"
import hamburger from "../images/hamburger.svg"

const GenericNavbar = ({ children }) => {
  return (
    <nav>
      <img src={hamburger} alt="hamburger" />
      <input type="checkbox" />
      {children}
    </nav>
  )
}

export default GenericNavbar
