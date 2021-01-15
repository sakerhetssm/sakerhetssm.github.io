import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"

const Dec2020Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - December 2020</h1>
      <p>Vi välkommnar dig in på årets julklappsutdelning, i år så fick vi göra den online tyvärr pga corona. Men var gärna försiktig, av nån anledning kan namnet på paketet ibland bli "Segfault", hmm. <code>nc 35.228.72.74 8008</code> <a href="/monthly/dec-2020/files.zip">Filer</a>.</p>
      <details>
        <summary>Hint 1</summary>
        unsorted julklappar pekar ofta på ställen där de inte borde
      </details>
    </MonthlyLayout>
  )
}

export default Dec2020Page
