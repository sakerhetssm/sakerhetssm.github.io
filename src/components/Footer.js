import * as React from "react"
import logo from "../images/kodsport.png"
import "../styles/Footer.scss"

const Navbar = () => {
  return (
    <footer>
      <a href="https://www.kodsport.se/">
        <img src={logo} alt="kodsport" />
      </a>
    </footer>
  )
}

export default Navbar
