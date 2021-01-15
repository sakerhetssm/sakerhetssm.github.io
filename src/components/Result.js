import * as React from "react"
import style from "../styles/Result.module.scss"
import ResultRow from "./ResultRow"

const Result = ({ data }) => {
  let rows = [];
  for (let i = 0; i < data.length; i++) {
    let r = data[i];
    rows.push(<ResultRow
      key={i}
      rank={i + 1}
      name={r.name}
      score={r.score}
      members={r.members}
    />)
  }

  return (
    <div className={style.container}>
      <div className={style.header}>#</div>
      <div className={style.header}>Lag</div>
      <div className={style.header}>Poäng</div>
      {rows}
    </div>
  )
}

export default Result
