import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
      }
    render() {
        return (
            <Html lang="id">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

                    <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
                    <meta name='description' content='MATAER GROUP : A holding of Mataer Companies' />
                    <meta name='keywords' content='Keywords' />

                    <link rel="manifest" href="/manifest.json" />
                    <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                    <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                    <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                    <meta name="theme-color" content="#317EFB"/>

                    {/* OPEN GRAP */}

                    {/* favicon */}
                    <link rel="shortcut icon" href="/mataer-logo-color.png"/>


                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;900&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


