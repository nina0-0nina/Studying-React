// imports
import React from "react"
import If from './if.jsx'

export default props => {
    return (
        <div>
            <h2>O número é {props.numero} </h2>
            <If test={ props.numero % 2 == 0}>
                <span>Par</span>
            </If>

            <If test={ props.numero % 2 !== 0}>
                <span>Ímpar</span>
            </If>

            {/* { props.numero % 2 == 0 ?
                <span>Par</span>
                : <span>Ímpar</span>
            } */}
        </div>
    )
}