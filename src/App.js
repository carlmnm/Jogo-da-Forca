import React, { useState } from "react"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/chute"

export default function App() {
  const [palavraSelecionada, setPalavraSelecionada] = useState("")
  const [arrayPalavra, setArrayPalavra] = useState([])
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [letraClickada, setLetraClickada] = useState([])
  let [escondida, setEscondida] = useState([])
  const [contadorDeInicio, setContadorDeInicio] = useState(0)


  return (
    <div className="container-jogo">
      <Jogo
        palavraSelecionada={palavraSelecionada}
        setPalavraSelecionada={setPalavraSelecionada}
        arrayPalavra={arrayPalavra}
        setArrayPalavra={setArrayPalavra}
        letraClickada={letraClickada}
        setEscondida={setEscondida}
        escondida={escondida}
        contadorDeInicio={contadorDeInicio}
        setContadorDeInicio={setContadorDeInicio}

      />

      <Letras
        alfabeto={alfabeto}
        letraClickada={letraClickada}
        setLetraClickada={setLetraClickada}
        palavraSelecionada={palavraSelecionada}
        setPalavraSelecionada={setPalavraSelecionada}
        arrayPalavra={arrayPalavra}
        setArrayPalavra={setArrayPalavra}
        contadorDeInicio={contadorDeInicio}



      />

      <div className="container-chute">
        <Chute 
        contadorDeInicio={contadorDeInicio}
        />
      </div>
    </div>
  )
}


