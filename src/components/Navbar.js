import * as React from "react"
import { Link } from "gatsby"
import GenericNavbar from "./GenericNavbar"
import style from "../styles/Navbar.module.scss"

const Navbar = () => {
  return (
    <GenericNavbar>
      <ul>
        <li><Link activeClassName={style.active} to="/">Hem</Link></li>
        <li>
          <input type="checkbox" />
          <p>Tidigare år</p>
          <ul>
            <li><a href="/halloween2020/">Halloween 2020</a></li>
            <li><Link activeClassName={style.active} to="/ssm2020">2020</Link></li>
            <li><Link activeClassName={style.active} to="/ssm2019">2019</Link></li>
            <li><Link activeClassName={style.active} to="/ssm2016">2016</Link></li>
          </ul>
        </li>
        <li><a href="https://monthly.sakerhetssm.se/">Månadens problem</a></li>
        <li><Link activeClassName={style.active} to="/about">Om</Link></li>
        <li><Link activeClassName={style.active} to="/learn">Läroresurser</Link></li>
      </ul>
    </GenericNavbar>
  )
}

export default Navbar
