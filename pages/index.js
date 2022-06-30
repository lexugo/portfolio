import Head from 'next/head'
import { Suspense } from 'react'
import Panic from 'components/panic'
import Listening from 'components/listening'

import getListening from 'services/music'

export default function Welcome({ listening }) {
    return (
		<main className="welcome">
			<Head>
				<title>Hugo @lexugo</title>
				<meta name="description" content="Hello; I'm Hugo. Full-Stack software engineer at Cirque du Soleil." />
			</Head>
			<div className="greeting">
				<h1>Hello;</h1>
			</div>
			<div className='bio'>
				<h2>I'm Hugo. Full-Stack software engineer at <a href="https://www.cirquedusoleil.com/" target="_blank">Cirque&nbsp;du&nbsp;Soleil</a>.</h2>
				<p className='music taste'>
					I love music and would definitely recommend tuning in to <a href='https://cism893.ca/' target='_blank' >CISM</a> or <a href='https://www.byte.fm/' target='_blank' >Byte.fm</a> radio.
					<Panic><Listening {...listening} /></Panic>
				</p>
			</div>
		</main>
    )
}

export async function getStaticProps() {
    const track = await getListening()
    // Todo: Error handling

    return {
        props: { listening: { track } },
        revalidate: 60,
    }
}
