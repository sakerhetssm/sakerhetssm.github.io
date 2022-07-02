import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"
import svinstian from "../../../images/svinstian.png"
import style from "../../../styles/Util.module.scss"

const FebMar2022Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - Juli 2022</h1>
      <p>Några hackare från Statens Paketshanteringsverk har installerat en bakdörr på våran echo-server! Kan du förstå vad man behöver skicka för trafik för att aktivera bakdörren? <a href="/monthly/jul-2022/backdoor">Fil</a>.</p>
    </MonthlyLayout>
  )
}

export default FebMar2022Page
