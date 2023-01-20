import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="fr-FR">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/merith.png" />
          <meta name="title" content="Joel Pokam Dev Front" />
          <meta
            name="description"
            content="Hey salut, je suis Joel Pokam dev front end pour des apps web, mobiles et desktop."
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Joel Pokam - FrontEnd Dev" />
          <meta
            property="og:description"
            content="Hey salut, je suis Joel Pokam dev front end pour des apps web, mobiles et desktop."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
