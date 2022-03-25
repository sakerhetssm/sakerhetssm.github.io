import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  const seoImage = "https://sakerhetssm.se/images/logo.png"
  const title = "Säkerhets-SM"
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{title}</title>
        <meta name="image" content={seoImage} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={seoImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sakerhetssm.se/" />
        <meta name="twitter:image" content={seoImage} />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
