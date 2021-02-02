import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"
import lightsout from "../../../images/lightsout.png"
import style from "../../../styles/Util.module.scss"

const FebMar2021Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - Februari och Mars 2021</h1>
      <p>Lights out! Hur ska knapparna stå för att lampan ska lysa?</p>

      <div className={style.centerimg}><img style={{ maxHeight: "300px" }} src={lightsout} alt="challenge" /></div>

      <p>OBS: I just den här uppgiften kommer flaggan inte att vara på formatet "SSM{'{'}...{'}'}".</p>
      <p>Detta månadens problem är samma som årets affischproblem för Säkerhets-SM. Detta betyder att uppgiften kommer att dyka upp på kvalet. Så om du löser den nu så har du redan samlat några poäng! Men detta är också ett månadens problem, vilket betyder att om du löser problemet och skickar in det i plattformen för månadens problem så kommer du att ha en chans att vinna en av två biobiljetter som lottas ut bland de första 40 som löser uppgiften. <a href="https://monthly.sakerhetssm.se/">Här</a> hittar du plattformen för Månadens problem.</p>
    </MonthlyLayout>
  )
}

export default FebMar2021Page
