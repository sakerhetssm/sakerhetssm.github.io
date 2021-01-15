import * as React from "react"
import Layout from "../components/Layout"
import Result from "../components/Result"
import result from "../data/result2019.json"

const Ssm2019Page = () => {
  return (
    <Layout>
      <h1>SSM 2019</h1>
      <h2>Lösningar</h2>
      <p><a href="https://github.com/Kodsport/sakerhetssm-2019-solutions">Här</a> finns lösningar till alla problem från tävlingen.</p>

      <h2>Resultat</h2>
      <Result data={result} />

      <h2>Arrangörsgrupp</h2>
      <h4>Organisation</h4>
      <ul>
        <li><a href="https://grenfeldt.dev/">Mattias Grenfeldt</a></li>
        <li>Johan Sannemo</li>
      </ul>
      <h4>Problemskapare</h4>
      <ul>
        <li>Herman Karlsson</li>
        <li><a href="https://github.com/n00byedge">Hannes Bredberg</a></li>
        <li><a href="https://zeta-two.com/">Calle "Zeta Two" Svensson</a></li>
        <li>Viktor Edström</li>
        <li>Fredrik Ljung</li>
        <li><a href="https://grenfeldt.dev/">Mattias Grenfeldt</a></li>
      </ul>
      <h4>Design</h4>
      <ul>
        <li>Johan Lam</li>
        <li><a href="https://grenfeldt.dev/">Mattias Grenfeldt</a></li>
      </ul>

      <h2>Sponsorer</h2>
      <p>Säkerhets-SM 2019 sponsrades av <a href="https://www.msab.com/">MSAB</a> och <a href="https://www.sakerhetspolisen.se/">Säkerhetspolisen</a>.</p>
    </Layout>
  )
}

export default Ssm2019Page
