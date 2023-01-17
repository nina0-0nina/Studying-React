// imports
import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <h3>Componente filho</h3>
        <Filho sobrenome='Oliveira'>Rita</Filho>
        <Filho {...props}>Maria</Filho>
        <Filho sobrenome={props.sobrenome}>Luiza</Filho>
    </div>