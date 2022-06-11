import * as React from "react"
import MainLayout from "../components/MainLayout"

const Ssm2022Page = () => {
  return (
    <MainLayout>
      <h1>SSM 2022</h1>
      <h2>Uppgifter och lösningar</h2>
      <p><a href="https://github.com/Kodsport/sakerhetssm-2022-solutions">Här</a> finns uppgifter och lösningar från kvalet och finalen.</p>

      <h2>Kvalet</h2>
      <p><a href="/ssm2022kval/">Här</a> hittar du tävlingssidan och resultatet för kvalet. <a href="https://www.youtube.com/watch?v=cFJCb-_NIes">Här</a> hittar du avslutningsstreamen som hölls efter kvalet.</p>

      <h2>Final</h2>
      <p><a href="/ssm2022final/">Här</a> hittar du tävlingssidan och resultatet för finalen.</p>

      <h2>Arrangörsgrupp</h2>
      <h4>Organisation</h4>
      <ul>
        <li>Mateusz Drwal</li>
        <li>Aron Bergman</li>
        <li>Jonathan Lööv</li>
      </ul>
      <h4>Problemskapare</h4>
      <ul>
        <li>Mateusz Drwal</li>
        <li>Aron Bergman</li>
        <li>Jonathan Lööv</li>
        <li><a href="https://grenfeldt.dev/">Mattias Grenfeldt</a></li>
        <li><a href="https://zeta-two.com/">Calle "Zeta Two" Svensson</a></li>
        <li>Loke Gustafsson</li>
        <li>Martin Wennberg</li>
        <li>Carl Sundvall</li>
        <li>Hannes Bredberg</li>
        <li>Movitz Sunar</li>
        <li>Tobias Lundberg</li>
      </ul>
      <h4>Andra som hjälpte till!</h4>
      <ul>
      <li>Michal Dzialak</li>
      <li>Asta Olofsson</li>
      <li>Julia Mårtensson</li>
      <li>Fredrik Ekholm</li>
      <li>Leopold Hermansson</li>
      <li>Axel Nilsson</li>
      </ul>

      <h2>Sponsorer</h2>
      <p>Huvudsponsor: <a href="https://www.sentor.se">Sentor</a>. Finalsponsorer: <a href="https://cparta.se/">Cparta</a>, <a href="https://www.foi.se/">FOI</a>, <a href="https://www.msab.com">MSAB</a>, <a href="https://jobb.orangecyberdefense.com/">Orange Cyberdefense</a> och <a href="https://www.venor.se/">Venor</a>. <a href="https://g.co/cloud">Google Cloud</a> sponsrade även infrastrukturen.</p>
    </MainLayout>
  )
}

export default Ssm2022Page
