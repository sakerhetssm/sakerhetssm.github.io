import * as React from "react"
import logo from "../images/kodsport.png"
import "../styles/Footer.scss"

const Footer = () => {
  return (
    <footer>
      <a href="https://www.kodsport.se/">
        <img src={logo} alt="kodsport" />
      </a>
    </footer>
  )
}

export default Footer
