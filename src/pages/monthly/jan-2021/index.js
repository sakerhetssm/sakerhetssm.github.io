import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"

const Jan2021Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - Januari 2021</h1>
      <p>ACME Corp har haft en... dataincident och vill nu anlita dig för att lista ut vad som hände. De har hittat lite spår och undrar vilken data som förövarna har lyckats exfiltrera. <a href="/monthly/jan-2021/chall.zip">Fil</a>.</p>
    </MonthlyLayout>
  )
}

export default Jan2021Page
