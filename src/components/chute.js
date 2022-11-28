import React from "react"

export default function Chute({contadorDeInicio}){
    const [palpite, setPalpite] = React.useState("")

    function chutar(){
        console.log(palpite)
        setPalpite("")

    }

  


    return(
        <div className={`${contadorDeInicio === 0 ? "hiden" : "input-chute"}`}>
            <p className="ja-sei">Já sei a palavra!</p>
            <input data-test="guess-input" placeholder="Escreva seu palpite" value={palpite} onChange={ev => setPalpite(ev.target.value)}></input>
            <button data-test="guess-button" className="botao-chutar" onClick={chutar}>Chutar!</button>
        </div>
    )
}