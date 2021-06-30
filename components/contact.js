import { memo } from "react"

function Contact() {
    return (
        <div className="contact">
            <h3>Contact</h3>
            <address>
                Hochelaga <br />
                Tiohtià:ke / Montréal <br />
                Québec, Canada <br />
                <a href="mailto:contact@lexugo.ca" className="email">contact@lexugo.ca</a>
            </address>
            <Networks />
        </div>
    )
}

function Networks() {
    const networks = [
        { name: 'Linkedin', url: 'https://www.linkedin.com/in/lexugo' },
        { name: 'Github', url: 'https://github.com/lexugo' },
        { name: 'Instagram', url: 'https://www.instagram.com/suisjeperdu' }
    ]

    return (
        <nav className="networks">
            { networks.map(({ name, url }) => <a key={name} href={url}>{name}</a>) }
        </nav>
    )
}

export default memo(Contact)