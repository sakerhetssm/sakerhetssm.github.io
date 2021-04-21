import * as React from "react"
import MonthlyLayout from "../../../components/MonthlyLayout"

const Apr2021Page = () => {
  return (
    <MonthlyLayout>
      <h1>Månadens problem - April 2021</h1>
      <p>(Fortsättning från <a href="https://github.com/Kodsport/sakerhetssm-2021-solutions/tree/master/kval/crypto-diffie-hellman">Sagan om Diffie och Hellmann</a> från SSM 2021 kval.) Du lyckades hjälpa Konungen avlyssna Hellmanns meddelande till Diffie! Men det verkar som att Diffie har upptäckt sitt misstag och fixat servern. Nu har Hellmann skickat ännu ett meddelande till Diffie. Kan du hjälpa Konungen än en gång? <a href="/monthly/apr-2021/chall.zip">Fil</a>.</p>

      <code>nc 35.228.72.74 8008</code>

      <details>
        <summary>
          Hint
        </summary>
        <p>Låt d vara en delare till (p-1).</p>
        <p>(g^a)^((p-1)/d) mod p = (g^((p-1)/d))^a mod p</p>
        <p>(g^((p-1)/d)) kommer ha en ordning (<a href="https://en.wikipedia.org/wiki/Multiplicative_order">https://en.wikipedia.org/wiki/Multiplicative_order</a>) som är max d.</p>
      </details>
    </MonthlyLayout>
  )
}

export default Apr2021Page
