import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"

const Jul2021Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - Juli 2021</h1>
      <p>Sedan förra månadens PHP-fadäs har vi på Kodsport insett att vi måsta använda enterprise-teknologi från och med nu. Äntligen kan ingen komma åt våra flaggor! <a href="http://35.228.72.74:8010/">Länk</a>.</p>

      <details>
        <summary>
          Hint
        </summary>
        <p>Eclipse MAT är ett bra program för felsökning. Inte för att vi har buggar eller så…</p>
      </details>
    </MonthlyLayout>
  )
}

export default Jul2021Page
