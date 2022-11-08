import 'styles/global.sass'

import Signature from 'components/signature'
import Contact from 'components/contact'

export default function Presense({ children }) {
	return (
		<html>
			<head>
				<title>Hugo @lexugo</title>
				<meta name="description" content="Hello; I'm Hugo. Full-Stack software engineer at Cirque du Soleil." />
			</head>
			<body>{ children }</body>
		</html>
	);
}
