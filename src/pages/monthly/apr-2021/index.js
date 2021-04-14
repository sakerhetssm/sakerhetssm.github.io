import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"

const Apr2021Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - April 2021</h1>
      <p>(Fortsättning från <a href="https://github.com/Kodsport/sakerhetssm-2021-solutions/tree/master/kval/crypto-diffie-hellman">Sagan om Diffie och Hellmann</a> från SSM 2021 kval.) Du lyckades hjälpa Konungen avlyssna Hellmanns meddelande till Diffie! Men det verkar som att Diffie har upptäckt sitt misstag och fixat servern. Nu har Hellmann skickat ännu ett meddelande till Diffie. Kan du hjälpa Konungen än en gång? <a href="/monthly/apr-2021/chall.zip">Fil</a>.</p>
    </MonthlyLayout>
  )
}

export default Apr2021Page
