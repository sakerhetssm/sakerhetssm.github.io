import * as React from "react"
import style from "../styles/ResultRow.module.scss"

const ResultRow = ({ rank, name, score, members }) => {
  return (
    <>
      <div className={style.rank}>{rank}</div>
      <div className={style.name}>{name}</div>
      <div className={style.score}>{score}</div>
      {members !== undefined && <div className={style.members}>{members}</div>}
    </>
  )
}

export default ResultRow
