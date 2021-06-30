import 'styles/global.sass'

import Signature from 'components/signature'
import Contact from 'components/contact'

export default function Layout({ Component, pagePros: props }) {
    return (
        <>
            <header>
                <Signature />
                <Contact />
            </header>
            <Component {...props} />
        </>
    )
}