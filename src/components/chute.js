import React from "react"

export default function Chute(){
    const [palpite, setPalpite] = React.useState("")

    function chutar(){
        console.log(palpite)
        setPalpite("")

    }

  


    return(
        <div className="input-chute">
            <p className="ja-sei">Já sei a palavra!</p>
            <input placeholder="Escreva seu palpite" value={palpite} onChange={ev => setPalpite(ev.target.value)}></input>
            <button className="botao-chutar" onClick={chutar}>Chutar!</button>
        </div>
    )
}