import * as React from "react"
import { Link } from "gatsby"
import MainLayout from "../components/MainLayout"
import lightsout from "../images/lightsout.png"
import style from "../styles/Util.module.scss"
import sentorLogo from "../images/sentor.png"
import microaaLogo from "../images/microaa.png"
import msabLogo from "../images/msab.png"
import orangeLogo from "../images/orangecyberdefense.png"
import venorLogo from "../images/venor.png"

const IndexPage = () => {
  return (
    <MainLayout>
      <h1>Finalen är nu igång!</h1>
      <p>Du hittar plattformen <a href="https://ctf.sakerhetssm.se/">här</a>.</p>

      <h1>Vad är Säkerhets-SM?</h1>
      <p>Säkerhets-SM är en nationell Capture The Flag tävling för gymnasiet. Tävlingen fokuserar på problemlösning inom områdena programmering, kryptografi, binär exploatering, reverse engineering, webbsäkerhet och forensik. Uppgifterna varierar från nybörjarvänliga till riktigt kluriga, så även om man aldrig deltagit i en CTF förut så kan man delta. Framför allt så lär man sig mycket av att vara med. Om man har slutat gymnasiet kan man fortfarande delta i tävlingen, men då utom tävlan.</p>
      <p>Tävlingen sker genom en webbplattform så man kan tävla från var som helst. Man tävlar i lag om högst 3 personer, och topplagen vinner priser. Årets tävling kommer att bestå av två delar, ett kval och en final. Kvalet kommer att ske 26-28 mars, och finalen kommer att ske någon gång under maj eller juni. Båda tävlingarna kommer att vara digitala. De bästa lagen från kvalet kommer till finalen. Vi kommer även att hålla en träningstävling en vecka innan kvalet med uppgifter från tidigare år.</p>
      <p>CTF-tävlingar (Capture The Flag) spelas oftast i två olika format. Attack och försvar eller Jeopardystil. Säkerhets-SM är är en tävling i Jeopardystil. Detta betyder att man i början av tävlingen får tillgång till en mängd problem och man visar att man har löst en uppgift genom att skicka in uppgiftens "flagga" till plattformen. Flaggor i den här tävlingen är textsträngar på formen "SSM{"{"}...{"}"}".</p>
      <p>Gå gärna med i <a href="https://discord.gg/edKFKKU">Kodsports Discordserver</a> för diskussion om tävlingen. Gilla vår <a href="https://www.facebook.com/sakerhetssm">Facebooksida</a>! Man kan också skriva upp sig på vår <a href="https://cdn.forms-content.sg-form.com/338d60af-6184-11eb-8f8c-86607a56e162">mailinglista</a> för att få nyheter som när registreringen för tävlingen öppnar.</p>

      <h1>Viktiga datum</h1>
      <ul>
        <li>Träningstävling: 15 mars - 21 mars</li>
        <li>Kvalet: 20:00, 26 mars - 20:00, 28 mars, 47h</li>
        <li>Finalen: 19:00, 28 maj - 17:00, 30 maj, 46h</li>
      </ul>

      <h1>Lös första problemet redan nu!</h1>
      <p>Nedan kan ni testa på att lösa årets affischproblem. Problemet kommer vara med i Säkerhets-SM 2021, så om du löser det och skickar in flaggan under kvalet har du redan fått lite poäng! Hur ska knapparna stå för att lampan ska lysa? (I just den här uppgiften kommer flaggan inte att vara på formen "SSM{"{"}...{"}"}".) Psst! Om du redan nu har löst uppgiften och vill ha chans att vinna en biobiljett, <Link to="/monthly/febmar-2021/">klicka här!</Link></p>

      <h3>Lights out:</h3>
      <div className={style.centerimg}><img style={{ maxHeight: "300px" }} src={lightsout} alt="challenge" /></div>

      <h1>Huvudsponsor</h1>
      <div className={style.centerimg}><a href="https://www.sentor.se"><img style={{ maxHeight: "200px" }} src={sentorLogo} alt="Sentor" /></a></div>
      <h3><a href="https://www.sentor.se">Sentor</a></h3>
      <p>Sentor Security är ett renodlat cybersäkerhetsföretag med över 20 års erfarenhet i branschen. På våra kontor runt om i Norden arbetar över 80 anställda dedikerat med att testa och skydda våra kunders digitala tillgångar, och tillsammans bildar vi landets största och mest erfarna samling av pentestare och säkerhetsanalytiker. <a href="https://www.sentor.se">www.sentor.se</a></p>

      <h1>Sponsorer</h1>
      <div className={style.centerimg}><a href="https://www.microaalabs.se/"><img src={microaaLogo} alt="MicroAA Labs" /></a></div>
      <h3><a href="https://www.microaalabs.se/">MicroAA Labs</a></h3>
      <p>För mer info, se: <a href="https://www.microaalabs.se/">www.microaalabs.se</a></p>

      <div className={style.centerimg}><a href="https://www.msab.com"><img src={msabLogo} alt="MSAB" /></a></div>
      <h3><a href="https://www.msab.com">MSAB</a></h3>
      <p>Gör det du brinner för och bidra samtidigt till en tryggare värld – hos MSAB. Vi utvecklar ledande kriminalteknologi som används av polis, tull, militär och andra säkerhetsmyndigheter runt om i världen. Vi söker alltid efter security researchers och C#/C++ utvecklare till vårt huvudkontor centralt i Stockholm. <a href="https://www.msab.com/careers">www.msab.com/careers</a></p>

      <div className={style.centerimg}><a href="https://jobb.orangecyberdefense.com/"><img src={orangeLogo} alt="Orange Cyberdefense" /></a></div>
      <h3><a href="https://jobb.orangecyberdefense.com/">Orange Cyberdefense</a></h3>
      <p>Digital freedom is not given</p>

      <p>At Orange Cyberdefense we believe that the Internet can remain this trusted world of leisure, professional opportunities and services provider that make everyday life easier. Our purpose is to build a safer digital society.</p>

      <p>Would you like to be a cyberdefender? <a href="https://jobb.orangecyberdefense.com/">jobb.orangecyberdefense.com</a></p>

      <div className={style.centerimg}><a href="https://www.venor.se/"><img src={venorLogo} alt="Venor" /></a></div>
      <h3><a href="https://www.venor.se/">Venor</a></h3>
      <p>Venor is a defensive and a core blue team company, we focus on helping large and small organisations finding and handling adversaries in their network. This includes both proactive work or forensics after an incident has occurred.</p>

      <p>In summary Venor is a company with nerdy people, focusing on technical it-security. <a href="https://www.venor.se/">www.venor.se</a></p>
      <h3>Google Cloud</h3>
      <p>Infra sponsored by <a href="https://g.co/cloud">g.co/cloud</a></p>

      <h1>Årets affisch</h1>
      <p>Om du är en lärare eller bara någon som vill sprida information om tävlingen kan du hitta årets affisch för utskrift <a href="/affisch.pdf">här</a>.</p>
    </MainLayout >
  )
}

export default IndexPage
