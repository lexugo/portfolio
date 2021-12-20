import Head from 'next/head'
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
                <h2>I'm Hugo. Full-Stack software engineer at <a href="https://www.cirquedusoleil.com/" target="_blank">Cirque du Soleil</a>.</h2>
            </div>
            { listening && <Listening {...listening} /> }
        </main>
    )
}

export async function getStaticProps() {
    const listening = await getListening()
    // Todo: Error handling

    return {
        props: { listening },
        revalidate: 60,
    }
}
