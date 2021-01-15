import * as React from "react"
import MainLayout from "../components/MainLayout"

const LearnPage = () => {
  return (
    <MainLayout>
      <h1>Lär dig CTF</h1>
      <p>Nedan följer några bra resurser för att lära sig om CTF och IT-säkerhetstävlingar.</p>

      <h3>Säkerhets-SM föreläsningar</h3>
      <p>Här är några av Säkerhets-SM:s egna föreläsningar.</p>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=jYCN6QyZeeQ">Intro till assembly</a></li>
        <li><a href="https://www.youtube.com/watch?v=ymlYSeoF6j4">Intro till reverse engineering</a></li>
        <li><a href="https://www.youtube.com/watch?v=IFjty3suKXg">Intro till pwn</a></li>
      </ul>

      <h3>Youtube</h3>
      <ul>
        <li>
          <a href="https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w">LiveOverflow</a>
          : En väldigt pedagogisk kanal med många bra videos. Nedan är två videos från kanalen.
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=2TofunAI6fU">
            The Secret step-by-step Guide to learn Hacking
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=8ev9ZX9J45A">
            What is CTF? An introduction to security Capture The Flag competitions
          </a>
        </li>
        <br />
        <li>
          <a href="https://www.youtube.com/user/GynvaelEN">Gynvael</a>
          : Långa, lite mer avancerade videos, men väldigt lärorika.
        </li>
        <li>
          <a href="https://www.youtube.com/user/ZetaTwo">ZetaTwo</a>
          : Calle Svensson är medlem i det bästa svenska CTF-laget, HackingForSoju. <a href="https://www.youtube.com/playlist?list=PLzzz0pYwY0M0u5daM96-QvHagA5v7FhLP">Här</a> går Calle igenom alla problem från 2019 och 2020 års tävling.
        </li>
        <li>
          <a href="https://www.youtube.com/user/RootOfTheNull">John Hammond</a>
        </li>
      </ul>

      <h3>CTF och Wargames</h3>
      <p>Wargames är som en CTF, fast den är uppe permanent. PicoCTF är en CTF som körs under en period och efteråt så lämnar organisatörerna tävlingen uppe så att folk kan träna. OverTheWire är en wargames-sida.</p>
      <ul>
        <li><a href="https://picoctf.com/">PicoCTF</a></li>
        <li><a href="http://overthewire.org/">OverTheWire</a></li>
      </ul>

      <h3>Länksamlingar och anteckningar</h3>
      <ul>
        <li><a href="https://gist.github.com/ZetaTwo/40976c9ed8b9abb81e44c872b3a68551">ZetaTwo - tools.md</a></li>
        <li><a href="https://pequalsnp-team.github.io/cheatsheet/steganography-101">Steganography 101</a></li>
        <li><a href="https://github.com/InfoSecIITR/reading-material">InfoSecIITR - Reading material</a></li>
      </ul>
    </MainLayout>
  )
}

export default LearnPage
