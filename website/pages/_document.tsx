import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"
import React from "react"
import GAScriptHead from "analytics/ga-script-head"
import GAScriptBody from "analytics/ga-script-body"

class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <GAScriptHead />
          <link
            rel="preload"
            href="/fonts/Inter.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <GAScriptBody />
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
