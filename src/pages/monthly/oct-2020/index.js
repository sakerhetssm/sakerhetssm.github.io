import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"

const Oct2020Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - Oktober 2020</h1>
      <p>Onej! Jag råkade corrupta min lilla usb sticka! Kan du fixa den? <a href="/monthly/oct-2020/drive.zip">Fil</a>.</p>
      <details>
        <summary>Hint 1</summary>
        Verktyg som kan vara användbara: 010 Editor med Drive.bt templaten, <a href="https://en.wikipedia.org/wiki/Design_of_the_FAT_file_system">https://en.wikipedia.org/wiki/Design_of_the_FAT_file_system</a>
      </details>
      <details>
        <summary>Hint 2</summary>
        Informationen om vart på disken flaggan ligger verkar ha försvunnit från filsystemet, men den kanske går att hitta ändå
      </details>
    </MonthlyLayout>
  )
}

export default Oct2020Page
