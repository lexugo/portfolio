import getListening from 'services/music'

import Signature from 'components/signature'
import Contact from 'components/contact'
import Listening from '../components/listening'

export default async function Welcome() {
	const track = await getListening()

	return (
		<div className='layout'>
			<header><Signature /></header>
			<main className="welcome">
				<div className="greeting"><h1>Hello;</h1></div>
				<div className='bio'>
					<h2>I'm Hugo. Full-Stack software engineer at <a href="https://www.cirquedusoleil.com/" target="_blank">Cirque&nbsp;du&nbsp;Soleil</a>.</h2>
					<Listening track={listening} />
				</div>
			</main>
			<footer><Contact /></footer>
		</div>
	)
}
