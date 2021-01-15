import * as React from "react"
import Layout from "../components/Layout"
import Result from "../components/Result"
import result from "../data/result2020.json"

const Ssm2020Page = () => {
  return (
    <Layout>
      <h1>SSM 2020</h1>
      <h2>Lösningar</h2>
      <p><a href="https://github.com/Kodsport/sakerhetssm-2020-solutions">Här</a> finns lösningar till alla problem från tävlingen.</p>

      <h2>Resultat</h2>
      <Result data={result} />

      <h2>Arrangörsgrupp</h2>
      <h4>Organisation</h4>
      <ul>
        <li><a href="https://grenfeldt.dev/">Mattias Grenfeldt</a></li>
      </ul>
      <h4>Problemskapare</h4>
      <ul>
        <li>Herman Karlsson</li>
        <li><a href="https://github.com/n00byedge">Hannes Bredberg</a></li>
        <li><a href="https://zeta-two.com/">Calle "Zeta Two" Svensson</a></li>
        <li>Viktor Edström</li>
        <li>Fredrik Ljung</li>
        <li>Aron Bergman</li>
        <li>Alexander Stenlund</li>
        <li>Axel Boström</li>
        <li>Kelvin Szolnoky</li>
        <li>Simon Sondén</li>
        <li>Douglas Bengtsson</li>
        <li><a href="https://grenfeldt.dev/">Mattias Grenfeldt</a></li>
      </ul>

      <h2>Sponsorer</h2>
      <p>Säkerhets-SM 2020 sponsrades av <a href="https://www.knowit.se/">Knowit</a>, <a href="https://www.msab.com/">MSAB</a> och <a href="https://vardinnovation.se/">Vårdinnovation</a>.</p>
    </Layout>
  )
}

export default Ssm2020Page
