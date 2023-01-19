// imports
import React, { useState } from 'react'

export default props => {

    const [nums, setNums] = useState(Array(props.qtNum).fill(0))

    function gerarNumerosNaoContidos(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min

        return array.includes(novoNumero)
            ? gerarNumerosNaoContidos(array) : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtNum)
            .fill(0)
            .reduce((a, e) => {
                console.log(a, e)
                return [...a, gerarNumerosNaoContidos(a)]
            }, [])
            // .sort((a, b) => a - b)
        setNums(novoArray)
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{nums.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar números</button>
        </>
    );
};
