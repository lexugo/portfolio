import Error from 'next/error'
import { memo } from 'react'

function Welcome() {
    return (
        <Error statusCode="Oops" title="This page is under development"/>
    )
}

export default memo(Welcome)