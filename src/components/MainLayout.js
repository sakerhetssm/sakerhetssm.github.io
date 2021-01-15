import * as React from "react"
import Layout from "./Layout"
import Navbar from "./Navbar"

const MainLayout = ({ children }) => {
  return (
    <Layout navbar={<Navbar />}>
      {children}
    </Layout>
  )
}

export default MainLayout
