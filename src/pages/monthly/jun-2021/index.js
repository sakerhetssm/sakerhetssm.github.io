import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"

const Apr2021Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - Juni 2021</h1>
      <p><a href="http://35.228.72.74:8009/">Länk</a>.</p>

      <details>
        <summary>
          Hint
        </summary>
        <p>PHP är ett väldigt <i>speciellt</i> språk där vissa tecken kan ha väldigt <i>speciella</i> beteenden</p>
      </details>
    </MonthlyLayout>
  )
}

export default Apr2021Page
