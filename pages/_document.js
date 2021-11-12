import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
					/>
					<meta name='application-name' content='Lexugo' />
					<meta name='mobile-web-app-capable' content='yes' />
					<link rel="manifest" href="/manifest.json" />
					<link
						href="/icons/favicon-192.png"
						rel="icon"
						type="image/png"
						sizes="192x192"
					/>
					<link
						href="/icons/favicon-512.png"
						rel="icon"
						type="image/png"
						sizes="512x512"
					/>
					<meta name="theme-color" content="#9749eb" />
				</Head>
				<body>
				    <Main />
                    <NextScript />
				</body>
			</Html>
		)
	}
}
