import { Link } from "gatsby"
import * as React from "react"
import "../styles/Header.scss"

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">
          Säkerhets-SM
        </Link>
      </h1>
    </header>
  )
}

export default Header
