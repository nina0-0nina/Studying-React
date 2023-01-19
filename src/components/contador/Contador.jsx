// imports
import './Contador.css'
import React, { Component } from 'react'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'

export default class Contador extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         passo: props.passo,
    //         val: 0
    //     }
    // }

    state = {
        passo: this.props.passo || 1,
        val: this.props.val || 0
    }

    inc = () => {

        this.setState({
            val: this.state.val + this.state.passo
        })

    }

    dec = () => {
        
        this.setState({
            val: this.state.val - this.state.passo
        })

    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return(
            <div className='Contador'>
                <h2>Contador</h2>

                <PassoForm passo={this.state.passo}
                    onPassoChange={this.mudarPasso}></PassoForm>

                <Display val={this.state.val}></Display>

                <Botoes onInc={this.inc} onDec={this.dec}></Botoes>

            </div>
        )
    }
}