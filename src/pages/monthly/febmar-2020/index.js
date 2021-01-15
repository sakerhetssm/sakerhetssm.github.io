import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"
import hiddeninplainsight from "../../../images/hiddeninplainsight.png"
import style from "../../../styles/Util.module.scss"

const Febmar2020Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - Februari och Mars 2020</h1>
      <p>Hidden in plain sight. Detta är samma som affischproblemet för Säkerhets-SM 2020.</p>
      <p>Detta kommer vara månadens problem för både februari och mars. Detta innebär att två biobiljetter kommer lottas bland de första 40 personerna som löser uppgiften.</p>
      <div className={style.centerimg}><img src={hiddeninplainsight} alt="challenge" /></div>

    </MonthlyLayout>
  )
}

export default Febmar2020Page
