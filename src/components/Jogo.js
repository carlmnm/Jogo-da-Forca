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




let contador = 0
let letraDescoberta = ""


export default function Jogo({ palavraSelecionada, setPalavraSelecionada, arrayPalavra, setArrayPalavra, letraClickada, }) {
    let escondida = []
    function selecionaPalavra(props) {
        let numeroAleatorio = parseInt(Math.random() * palavras.length)
        let palavraAleatoria = palavras[numeroAleatorio]

        
        setArrayPalavra(palavraAleatoria.split(''))

        while (escondida.length) {
            escondida.pop()
        }
        for (let i = 0; i < palavraAleatoria.length; i++) {
            escondida[i] = "_ "
        }

    }

    for (let i = 0; i < arrayPalavra.length; i++) {
        for (let j = 0; j < letraClickada.length; j++) {
            if (arrayPalavra[i] === letraClickada[j]) {
                contador = 1
                letraDescoberta = arrayPalavra[i]
                
            }
        }
        if (contador === 1) {
            escondida[i] = letraDescoberta
        } else {
            escondida[i] = "_ "
        }
        contador = 0

    }



    console.log(arrayPalavra)

    return (
        <div className="container-jogo">
            <div className="forca-imgs">
                <img data-test="game-image" src={forca0} alt="imagem da forca" className="forca" />
            </div>
            <button data-test="choose-word" className="botao-escolher-palavra" onClick={selecionaPalavra} type="button">Escolher Palavra</button>

            <div className="container-palavra">
                <span data-test="word" className="palavra-jogao">
                    {escondida}
                </span>


            </div>
        </div>
    )
}