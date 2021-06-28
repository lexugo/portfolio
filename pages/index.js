import { memo } from 'react'

function Welcome() {
    return (
        <div className="welcome">
            <div className="signature"> 
                <h2 className="name">Hugo Laquerre</h2>
                <h3 className="title">Full-Stack developer</h3>
            </div>
            <div className="introduction">
                <p>I make interfaces, shape brands and build digital products. Basically; I create, break and fix things, wrangle with code and design stuff.</p>
            </div>
            <div className="contact">
                <a href="mailto:hireme@lexugo.ca">Let's work together!</a>
            </div>
        </div>
    )
}

export default memo(Welcome)