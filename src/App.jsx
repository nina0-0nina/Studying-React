// imports
import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParamentro from './components/ComParamentro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default (props) => (
    // <h1>Olá React!</h1>,
        <div className="App">

            <Card titulo="Exercício X">Conteudo</Card>

            <Card titulo="#1-Primeiro Componente">
                <Primeiro />
            </Card>

            <Card titulo="#2-Componente com paramentro">
                 <ComParamentro titulo="Esse é o título"
                 subtitulo="Esse é o subtitulo"/>
            </Card>
            
            <Card titulo="#3-Componente com filho">
                <ComFilhos>
                            <ul>
                                <li>Ana</li>
                                <li>Bia</li>
                                <li>Carlos</li>
                                <li>Daniel</li>
                            </ul>
                        </ComFilhos>
            </Card>

            <Card titulo="#4-Repetição">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="#5-Condicional v1">
                <Condicional numero={10}></Condicional>
            </Card>

            <Card titulo="#6-Condicional v2">
            <CondicionalComIf numero={11}></CondicionalComIf>
            </Card>
                
    </div>
);