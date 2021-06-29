import { memo } from 'react'

function Signature() {
    return (
        <div className="signature"> 
            <h2 className="name">Hugo</h2>
            <h3 className="title">Web developer</h3>
        </div>
    )
}

export default memo(Signature)