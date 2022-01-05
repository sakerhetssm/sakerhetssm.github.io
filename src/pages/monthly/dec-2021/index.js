import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"

const Apr2021Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - December 2021</h1>
      <p>Tomten kommer tidigt och har redan gett dig LFI på en debian-server, men kan du <i>lokalisera</i> flaggan? <a href="http://35.228.72.74:8012/">Länk</a>.</p>

      <details>
        <summary>
          Hint
        </summary>
        <pre>1. Utmaningen är endast LFI, dvs ingen exploatering behövs
2. Flaggan finns i en fil på en plats som inte går att gissa sig till
3. Du behöver inte gå via /proc eller liknande
4. Att servern kör Debian har viss signifikans.
5. Hur skulle du <i>lokalisera</i> filen, om det var på din dator?</pre>
      </details>
    </MonthlyLayout>
  )
}

export default Apr2021Page
