import forca0 from "../assets/img/forca0.png"
import forca1 from "../assets/img/forca1.png"
import forca2 from "../assets/img/forca2.png"
import forca3 from "../assets/img/forca3.png"
import forca4 from "../assets/img/forca4.png"
import forca5 from "../assets/img/forca5.png"
import forca6 from "../assets/img/forca6.png"
import Letras from "./Letras"
import Chute from "./chute"

export default function Jogo() {
    return (
        <div className="container-jogo">
            <div className="forca-imgs">
                <img src={forca0} alt="imagem da forca" className="forca" />
            </div>
            <button className="botao-escolher-palavra" type="button">Escolher Palavra</button>

            <Letras />
            
            <div className="container-chute">
                <Chute />
            </div>

        </div>

    )
}