import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"
import svinstian from "../../../images/svinstian.png"
import style from "../../../styles/Util.module.scss"

const FebMar2022Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - Februari och Mars 2022</h1>
      <p>Nu har någon varit och kladdat på svinstian, men vad är det egentligen de har skrivit?</p>

      <div className={style.centerimg}><img style={{ maxHeight: "300px" }} src={svinstian} alt="challenge" /></div>

      <p>Detta månadens problem är samma som årets affischproblem för Säkerhets-SM. Detta betyder att uppgiften kommer att dyka upp på kvalet. Så om du löser den nu så har du redan samlat några poäng! Men detta är också ett månadens problem, vilket betyder att om du löser problemet och skickar in det på <a href="https://monthly.sakerhetssm.se/">monthly.sakerhetssm.se</a> innan kvalet slutar så kommer du att ha en chans att vinna en av de två biobiljetter som lottas ut under avslutningsstreamen för kvalet.</p>
    </MonthlyLayout>
  )
}

export default FebMar2022Page
