import * as React from "react"
import Layout from "../components/Layout"
import hiddeninplainsight from "../images/hiddeninplainsight.png"
import style from "../styles/Util.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Lös ett CTF-problem.</h1>
      <p>Nedan kan ni testa på att lösa ett av problemen som var med i Säkerhets-SM 2020. Tips: du letar efter en sträng på formen "SSM{"{"}...{"}"}".</p>

      <h3>Hidden in plain sight.</h3>
      <div className={style.centerimg}><img src={hiddeninplainsight} alt="challenge" /></div>

      <h1>Vad är Säkerhets-SM?</h1>
      <p>Säkerhets-SM är en nationell Capture The Flag tävling för gymnasiet. Tävlingen fokuserar på problemlösning inom områdena programmering, kryptografi, binär exploatering, reverse engineering, webbexploatering och forensik. Uppgifterna varierar från nybörjarvänliga till riktigt kluriga. Så även om man aldrig deltagit i en CTF förut så kan man delta. Framför allt så lär man sig mycket av att delta.</p>
      <p>Tävlingen sker genom en webbplattform så man kan tävla från var som helst. Man tävlar i lag om högst 3 personer. Topplagen vinner priser. Tävlingen brukar vara runt mars.</p>
      <p>CTF-tävlingar (Capture The Flag) spelas oftast i två olika format. Attack och försvar eller Jeopardystil. Säkerhets-SM är är en tävling i Jeopardystil. Detta betyder att man i början av tävlingen får tillgång till en mängd problem och man visar att man har löst en uppgift genom att skicka in uppgiftens "flagga" till plattformen. Flaggor i den här tävlingen är textsträngar på formen "SSM{"{"}...{"}"}".</p>
      <p>Gå gärna med i <a href="https://discord.gg/edKFKKU">Kodsports Discordserver</a> för diskussion om tävlingen. Gilla vår <a href="https://www.facebook.com/sakerhetssm">Facebooksida</a>!</p>
    </Layout >
  )
}

export default IndexPage
