// Dependencies
import * as React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

// Constants
const DOCUMENT_TITLE = '@Sygris'

class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta property='og:site_name' content={DOCUMENT_TITLE} />
          <meta property='og:title' content={DOCUMENT_TITLE} />
          <link rel='shortcut icon' href='/favicon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
