import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"

const Nov2020Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - November 2020</h1>
      <p>Jag hittade den här coola <a href="http://35.228.72.74:8005/">CV-generatorn</a>, men jag undrar om de tänkt på säkerheten? </p>
      <details>
        <summary>Hint 1</summary>
        Skriv <code>\bf</code> för att få fetstil.
      </details>
    </MonthlyLayout>
  )
}

export default Nov2020Page
