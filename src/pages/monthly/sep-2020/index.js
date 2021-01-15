import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"

const Sep2020Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - September 2020</h1>
      <p>Vi lyckades avlyssna ett meddelande från fienden, men det verkar krypterat. Något verkar borttaget också. Kan du hjälpa oss att förstå meddelandet? <a href="/monthly/sep-2020/out.zip">Här är meddelandet.</a></p>
      <p>OBS: sätt SSM{'{'}...{'}'} runt flaggan innan du skickar in den. </p>
      <details>
        <summary>Hint 1</summary>
        adfgvx
      </details>
      <details>
        <summary>Hint 2</summary>
        len(tk) == 6
      </details>
    </MonthlyLayout>
  )
}

export default Sep2020Page
