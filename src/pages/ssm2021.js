import * as React from "react"
import MainLayout from "../components/MainLayout"

const Ssm2021Page = () => {
  return (
    <MainLayout>
      <h1>SSM 2021</h1>
      <h2>Uppgifter och lösningar</h2>
      <p><a href="https://github.com/Kodsport/sakerhetssm-2021-solutions">Här</a> finns uppgifter och lösningar från kvalet och finalen.</p>

      <h2>Kvalet</h2>
      <p><a href="/ssm2021kval/">Här</a> hittar du tävlingssidan och resultatet för kvalet. <a href="https://www.youtube.com/watch?v=g92X6ZYR6BI">Här</a> hittar du avslutningsstreamen som hölls efter kvalet.</p>

      <h2>Final</h2>
      <p><a href="/ssm2021final/">Här</a> hittar du tävlingssidan och resultatet för finalen.</p>

      <h2>Arrangörsgrupp</h2>
      <h4>Organisation</h4>
      <ul>
        <li><a href="https://grenfeldt.dev/">Mattias Grenfeldt</a></li>
        <li>Mateusz Drwal</li>
        <li>Aron Bergman</li>
      </ul>
      <h4>Problemskapare</h4>
      <ul>
        <li><a href="https://zeta-two.com/">Calle "Zeta Two" Svensson</a></li>
        <li>Mateusz Drwal</li>
        <li>Aron Bergman</li>
        <li>Viktor Edström</li>
        <li>Jonathan Lööv</li>
        <li>Fredrik Ekholm</li>
        <li>Axel Nilsson</li>
        <li>Leopold Hermansson</li>
        <li>Thomas Peterson</li>
        <li>Asta Olofsson</li>
        <li><a href="https://grenfeldt.dev/">Mattias Grenfeldt</a></li>
      </ul>

      <h2>Sponsorer</h2>
      <p>Huvudsponsor: <a href="https://www.sentor.se">Sentor</a>. Sponsorer: <a href="https://www.microaalabs.se/">MicroAA Labs</a>, <a href="https://www.msab.com">MSAB</a>, <a href="https://jobb.orangecyberdefense.com/">Orange Cyberdefense</a> och <a href="https://www.venor.se/">Venor</a>. <a href="https://g.co/cloud">Google Cloud</a> sponsrade även infrastrukturen.</p>
    </MainLayout>
  )
}

export default Ssm2021Page
