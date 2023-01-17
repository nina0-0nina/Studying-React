// imports
import './App.css'
import React from 'react'
// import de componente
import Primeiro from './components/basics/Primeiro'
import ComParamentro from './components/basics/ComParamentro'
import ComFilhos from './components/basics/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basics/Repeticao'
import Condicional from './components/basics/Condicional'
import CondicionalComIf from './components/basics/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'

export default (props) => (
    // <h1>Olá React!</h1>,
        <div className="App">

            <Card titulo="Exercício X" color='#17A398'>Conteudo</Card>

            <Card titulo="#1-Primeiro Componente" color='#17A398'>
                <Primeiro />
            </Card>

            <Card titulo="#2-Componente com paramentro" color='#17A398'>
                 <ComParamentro titulo="Esse é o título"
                 subtitulo="Esse é o subtitulo"/>
            </Card>
            
            <Card titulo="#3-Componente com filho" color='#17A398'>
                <ComFilhos>
                            <ul>
                                <li>Ana</li>
                                <li>Bia</li>
                                <li>Carlos</li>
                                <li>Daniel</li>
                            </ul>
                        </ComFilhos>
            </Card>

            <Card titulo="#4-Repetição" color='#17A398'>
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="#5-Condicional v1" color='#17A398'>
                <Condicional numero={10}></Condicional>
            </Card>

            <Card titulo="#6-Condicional v2" color='#17A398'>
            <CondicionalComIf numero={11}></CondicionalComIf>
            </Card>

            <Card titulo='#7-Comunicação direta' color='#17A398'>
                <Pai sobrenome='Maia'></Pai>
            </Card>

            <Card titulo='#8-Comunicação indireta' color='#17A398'>
                <Super></Super>
            </Card>
                
    </div>
);