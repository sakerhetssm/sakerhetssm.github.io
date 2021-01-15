import * as React from "react"
import Layout from "../components/Layout"
import kodsport from "../images/kodsport.png"
import style from "../styles/Util.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <h1>Arrangör</h1>
      <div className={style.centerimg}><img src={kodsport} alt="kodsport" /></div>
      <p>Kodsport är en ideell förening som arbetar för att lyfta Sverige som IT-nation. Föreningen arrangerar tävlingar och träningsläger i datorrelaterade sporter, så som tävlingsprogrammering och Capture The Flag (datorsäkerhet). <a href="https://www.kodsport.se">www.kodsport.se</a></p>

      <h1>Kontakt</h1>
      <p>För frågor om tävlingen, kontakta <a href="mailto:sakerhetssm@kodsport.se">sakerhetssm@kodsport.se</a> eller gå med i <a href="https://discord.gg/edKFKKU">Kodsports Discordserver</a>.</p>
    </Layout >
  )
}

export default AboutPage
