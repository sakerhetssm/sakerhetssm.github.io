import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
const SEO = () => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    siteUrl,
    defaultImage,
  } = site.siteMetadata
  const seo = {
    title: defaultTitle,
    image: `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }
  return (
    <Helmet title={seo.title}>
      <meta name="image" content={seo.image} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}
export default SEO
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        siteUrl: url
        defaultImage: image
      }
    }
  }
`