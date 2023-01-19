// imports
import './Contador.css'
import React, { Component } from 'react'

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

    render() {
        return(
            <div>
                <h2>Contador</h2>

                <div className='Contador'>
                    <label for='passoInput'>Passo: </label>
                    <input id='passoInput' type='number'
                    value={this.state.passo}
                        onChange={e => this.setState({ passo: +e.target.value })} ></input>
                </div>

                <h4>Valor: {this.state.val}</h4>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}