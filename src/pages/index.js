import * as React from "react"
import { Link } from "gatsby"
import MainLayout from "../components/MainLayout"
import Sponsor from "../styles/Sponsor.module.scss"
import style from "../styles/Util.module.scss"
import svinstian from "../images/svinstian.png"
import sentorLogo from "../images/sentor.png"
import cpartaLogo from "../images/cparta.jpg"
import foiLogo from "../images/foi.png"
import msabLogo from "../images/msab.png"
import orangeLogo from "../images/orangecyberdefense.png"
import venorLogo from "../images/venor.png"

const IndexPage = () => {
  return (
    <MainLayout>
      <h1>Vad är Säkerhets-SM?</h1>
      <p>Säkerhets-SM är en nationell Capture The Flag tävling för gymnasiet. Tävlingen fokuserar på problemlösning inom områdena programmering, kryptografi, binär exploatering, reverse engineering, webbsäkerhet och forensik. Uppgifterna varierar från nybörjarvänliga till riktigt kluriga, så även om man aldrig deltagit i en CTF förut så kan man delta. Framför allt så lär man sig mycket av att vara med. Om man har slutat gymnasiet kan man fortfarande delta i tävlingen, men då utom tävlan.</p>
      <p>CTF-tävlingar (Capture The Flag) spelas oftast i två olika format. Attack och försvar eller Jeopardystil. Säkerhets-SM är är en tävling i Jeopardystil. Detta betyder att man i början av tävlingen får tillgång till en mängd problem och man visar att man har löst en uppgift genom att skicka in uppgiftens "flagga" till plattformen. Flaggor i den här tävlingen är textsträngar på formen "SSM{"{"}...{"}"}".</p>
      <p>Gå gärna med i <a href="https://discord.gg/edKFKKU">Kodsports Discordserver</a> för diskussion om tävlingen. Gilla vår <a href="https://www.facebook.com/sakerhetssm">Facebooksida</a>! Man kan också skriva upp sig på vår <a href="https://cdn.forms-content.sg-form.com/338d60af-6184-11eb-8f8c-86607a56e162">mailinglista</a> för att få nyheter som när registreringen för tävlingen öppnar.</p>

      <h1>SSM 2022</h1>
      <p>Tävlingen sker genom en webbplattform så man kan tävla från var som helst. Man tävlar i lag om högst 3 personer, och topplagen vinner priser. Årets tävling kommer att bestå av två delar, ett kval och en final. Kvalet kommer genomföras online och finalen kommer att hållas onsite på Chalmers, om inte pandemin stället till det. De bästa lagen från kvalet kommer till finalen. Vi kommer även att hålla en träningstävling en vecka innan kvalet med uppgifter från tidigare år.</p>

      <ul>
        <li>Träningstävling: 14 mars - 20 mars</li>
        <li>Kvalet: 25 mars 20:00 - 27 mars 20:00, 47 timmar (ställer om till sommartid)</li>
        <li>Finalen: 27 maj - 29 maj</li>
      </ul>

      <h1>Lös första problemet redan nu!</h1>

      <h3>Svinstian</h3>
      <p>Nu har någon varit och kladdat på svinstian, men vad är det egentligen de har skrivit?</p>
      <div className={style.centerimg}><img style={{ maxHeight: "300px" }} src={svinstian} alt="challenge" /></div>
      <p><a href="https://sakerhetssm.se/monthly/febmar-2022/">Skicka in svaret</a> för att delta i utlottningen av biobiljetter!</p>

      <h1>Huvudsponsor</h1>
      <div className={Sponsor.logo}><a href="https://www.sentor.se"><img style=
        {{
          /* the main sponsor gets a bigger logo */
          maxHeight: "350px",
          maxWidth: "100%",
          /* the style after this is to get rid */
          /* of the excesive padding of the logo from Sentor */
          objectFit: "cover",
          objectPosition: "center",
          width: "900px"
        }} src={sentorLogo} alt="Sentor" /></a></div>
      <h3><a href="https://www.sentor.se">Sentor</a></h3>
      <p>Sentor Security är ett renodlat cybersäkerhetsföretag med över 20 års erfarenhet i branschen. På våra kontor runt om i Norden arbetar över 80 anställda dedikerat med att testa och skydda våra kunders digitala tillgångar, och tillsammans bildar vi landets största och mest erfarna samling av pentestare och säkerhetsanalytiker. <a href="https://www.sentor.se">www.sentor.se</a></p>

      <h1>Sponsorer</h1>
      <div className={Sponsor.logo}><a href="https://cparta.se/">
        <img src={cpartaLogo} alt="Cparta" style={{
          /* Fulhack för att de inte har någon padding i sin bild... */
          border: "20px solid black", boxSizing: "border-box"
        }}/>
      </a></div>
      <h3><a href="https://cparta.se/">Cparta</a></h3>
      <p>Cparta is a company dedicated to protecting Swedish commercial interests by providing tailored cyber security services. By combining expertise, innovation and dedication, we are protecting our client&#39;s digital integrity. <a href="https://www.cparta.se/">www.cparta.se</a></p>

      <div className={Sponsor.logo}><a href="https://www.foi.se"><img src={foiLogo} alt="FOI" /></a></div>
      <h3><a href="https://www.foi.se">FOI</a></h3>
      <p>FOI (Totalförsvarets forskningsinstitut) utvecklar kunskap och ger stöd för att förbättra Sveriges cyberförsvar. Vår verksamhet berör bland annat säkerhet i industriella styrsystem, informationssäkerhetskultur, värdering av säkerheten i tekniska system, bedömning av informationssäkerhetsrisker, genomförande av cyberoperationer och verktyg för att genomföra cybersäkerhetsövningar. <a href="https://www.foi.se">www.foi.se</a></p>

      <div className={Sponsor.logo}><a href="https://www.msab.com"><img src={msabLogo} alt="MSAB" /></a></div>
      <h3><a href="https://www.msab.com">MSAB</a></h3>
      <p>Gör det du brinner för och bidra samtidigt till en säkrare värld – hos MSAB. Vi utvecklar ledande kriminalteknologi som används av polis, tull, militär och andra rättsvårdande myndigheter runt om i världen. Vi söker alltid efter security researchers och C#/C++ utvecklare till vårt huvudkontor, centralt beläget i Stockholm. <a href="https://www.msab.com/careers">www.msab.com/careers</a></p>

      <div className={Sponsor.logo}><a href="https://jobb.orangecyberdefense.com/"><img src={orangeLogo} alt="Orange Cyberdefense" /></a></div>
      <h3><a href="https://jobb.orangecyberdefense.com/">Orange Cyberdefense</a></h3>
      <p>Digital freedom is not given</p>

      <p>At Orange Cyberdefense we believe that the Internet can remain this trusted world of leisure, professional opportunities and services provider that make everyday life easier. Our purpose is to build a safer digital society.</p>

      <p>Would you like to be a cyberdefender? <a href="https://jobb.orangecyberdefense.com/">jobb.orangecyberdefense.com</a></p>

      <div className={Sponsor.logo}><a href="https://www.venor.se/"><img src={venorLogo} alt="Venor" /></a></div>
      <h3><a href="https://www.venor.se/">Venor</a></h3>
      <p>Venor is a defensive and a core blue team company, we focus on helping large and small organisations finding and handling adversaries in their network. This includes proactive work, active monitoring or forensics after an incident has occurred.</p>

      <p>In summary Venor is a company with nerdy people, focusing on technical it-security. <a href="https://www.venor.se/">www.venor.se</a></p>
      <h3>Google Cloud</h3>
      <p>Infra sponsored by <a href="https://g.co/cloud">g.co/cloud</a></p>
    </MainLayout >
  )
}

export default IndexPage
