import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta name='application-name' content='Lexugo' />
					<meta name='mobile-web-app-capable' content='yes' />
				</Head>
				<body>
				    <Main />
                    <NextScript />
				</body>
			</Html>
		)
	}
}
