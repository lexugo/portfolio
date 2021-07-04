import Head from 'next/head'

function Welcome() {
    return (
        <main className="welcome">
            <Head>
                <title>Hugo @lexugo</title>
                <meta name="description" content="Hello; I'm Hugo. Full-Stack software engineer at Ubisoft." />
            </Head>
            <div className="greeting">
                <h1>Hello;</h1>
                <h2>I'm Hugo. Full-Stack software engineer at <a href="https://montreal.ubisoft.com/en/" target="_blank">Ubisoft</a>.</h2>
            </div>
        </main>
    )
}

export default Welcome