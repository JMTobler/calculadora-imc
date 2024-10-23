import { useState } from 'react';
import './formulario.css';

const Formulario = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);
    let [nome, setNome] = useState('');

    const resultado = () => {
        if (altura > 0) {
            const imc = peso / (altura * altura);

            if (imc >= 40) {
                return <h1>Olá {nome}, você esta com obesidade grau III</h1>;
            } else if (imc <= 39.9 && imc >= 35) {
                return <h1>Olá {nome}, você esta com obesidade grau II</h1>;
            } else if (imc <= 34.9 && imc >= 30) {
                return <h1>Olá {nome}, você esta com obesidade grau I</h1>;
            } else if (imc <= 29.9 && imc >= 25) {
                return <h1>Olá {nome}, você esta com sobrepeso</h1>;
            } else if (imc <= 24.9 && imc >= 18.6) {
                return <h1>Olá {nome}, você esta Normal</h1>;
            } else if (imc <= 18.5) {
                return <h1>Olá {nome}, você esta abaixo do normal</h1>;
            }
        }else {
            return <h1>A sua altura nao pode ser zero</h1>
        }
    };
    
    return(
        <>
            <h1 className='titulo'>Calculadora de IMC</h1>

            <form>
                <input
                    type='text' 
                    placeholder='Nome (ex: joao)'
                    onChange={e => setNome(e.target.value)} 
                    className='input-material' 
                />
                
                <input
                    type='number' 
                    placeholder='Altura (ex: 1.75)'
                    onChange={e => setAltura(parseFloat(e.target.value))} 
                    className='input-material' 
                />

                <input
                    type='number'
                    placeholder='Peso (ex: 70)'
                    onChange={e => setPeso(parseFloat(e.target.value))}
                    className='input-material'
                />

                {resultado()}
            </form>

        </>
    )
}

export default Formulario;
