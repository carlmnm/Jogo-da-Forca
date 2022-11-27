import React, { useState } from "react"
import forca0 from "../assets/img/forca0.png"
import forca1 from "../assets/img/forca1.png"
import forca2 from "../assets/img/forca2.png"
import forca3 from "../assets/img/forca3.png"
import forca4 from "../assets/img/forca4.png"
import forca5 from "../assets/img/forca5.png"
import forca6 from "../assets/img/forca6.png"
import Letras from "./Letras"
import Chute from "./chute"
import palavras from "./palavras"
let escondida = []

export default function Jogo() {
    let [palavraSelecionada, setPalavraSelecionada] = useState("")
    let [arrayPalavra, setArrayPalavra] = useState([])
    console.log(palavraSelecionada)

    function selecionaPalavra(props) {
        const numeroAleatorio = parseInt(Math.random() * palavras.length)
        const palavraAleatoria = palavras[numeroAleatorio]

        setPalavraSelecionada(palavraAleatoria)
        setArrayPalavra(palavraSelecionada.split(''))

        while(escondida.length){
            escondida.pop()
        }
        for(let i = 0; i < palavraAleatoria.length; i++){
            escondida[i] = '_ '
        }
        
        return (
            <span className="letra">
                {props.caractere}
            </span>
        )
    }

    return (
        <div className="container-jogo">
            <div className="forca-imgs">
                <img src={forca0} alt="imagem da forca" className="forca" />
            </div>
            <button className="botao-escolher-palavra" onClick={selecionaPalavra} type="button">Escolher Palavra</button>

            <Letras />

            <div className="container-chute">
                <Chute />
            </div>

            <div className="container-palavra">
                <span className="palavra-jogo">
                    {escondida}
                </span>
            </div>

        </div>

    )
}