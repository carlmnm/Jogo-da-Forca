import React, { useState } from "react"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/chute"

export default function App() {
  const [palavraSelecionada, setPalavraSelecionada] = useState("")
  const [arrayPalavra, setArrayPalavra] = useState([])
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [letraClickada, setLetraClickada] = useState([])

  return (
    <div className="container-jogo">
      <Jogo
        palavraSelecionada={palavraSelecionada}
        setPalavraSelecionada={setPalavraSelecionada}
        arrayPalavra={arrayPalavra}
        setArrayPalavra={setArrayPalavra}
      />

      <Letras
        alfabeto={alfabeto}
        letraClickada={letraClickada}
        setLetraClickada={setLetraClickada}
      />

      <div className="container-chute">
        <Chute />
      </div>
    </div>
  )
}


