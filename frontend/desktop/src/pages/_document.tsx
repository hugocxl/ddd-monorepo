// Dependencies
import * as React from 'react'
import { createGetInitialProps } from '@sygris/ui'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

// Constants
const DOCUMENT_TITLE = '@Sygris'

const getInitialProps = createGetInitialProps()
class Document extends NextDocument {
  static getInitialProps = getInitialProps

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
