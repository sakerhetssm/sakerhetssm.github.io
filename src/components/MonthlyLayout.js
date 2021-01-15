import * as React from "react"
import Layout from "./Layout"
import GenericNavbar from "./GenericNavbar"

const MonthlyLayout = ({ children }) => {
  const nav = <GenericNavbar>
    <ul>
      <li><a href="https://monthly.sakerhetssm.se/">Månadens problem</a></li>
    </ul>
  </GenericNavbar>
  return (
    <Layout navbar={nav}>
      {children}
    </Layout>
  )
}

export default MonthlyLayout

