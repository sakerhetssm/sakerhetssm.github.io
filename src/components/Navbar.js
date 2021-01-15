import * as React from "react"
import { Link } from "gatsby"
import style from "../styles/Navbar.module.scss"
import hamburger from "../images/hamburger.svg"

const Navbar = () => {
  return (
    <nav>
      <img src={hamburger} alt="hamburger" />
      <input type="checkbox" />
      <ul>
        <li><Link activeClassName={style.active} to="/">Hem</Link></li>
        <li>
          <input type="checkbox" />
          <p>Tidigare år</p>
          <ul>
            <li><a href="/halloween2020/">Halloween 2020</a></li>
            <li><Link activeClassName={style.active} to="/ssm2020">2020</Link></li>
            <li><Link activeClassName={style.active} to="/ssm2019">2019</Link></li>
          </ul>
        </li>
        <li><a href="https://monthly.sakerhetssm.se/">Månadens problem</a></li>
        <li><Link activeClassName={style.active} to="/about">Om</Link></li>
        <li><Link activeClassName={style.active} to="/learn">Läroresurser</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
