
export default function Letras({alfabeto, letraClickada, setLetraClickada, rightWord, palavraSelecionada, setPalavraSelecionada, arrayPalavra, setArrayPalavra, contadorDeInicio}) {
    let classe = ""
    function clickarLetra(clickLetra) {
        

        if (!letraClickada.includes(clickLetra)) {
            setLetraClickada([...letraClickada, clickLetra])
        }

    }


    function Teclinha(props) {
        return (
            <div data-test="letter" onClick={() => clickarLetra(props.letra)} className={`${(letraClickada.includes(props.letra))||(contadorDeInicio === 0) ? "clickado" : "nao-clickado"}` } >
                <p className="teclaComLetra">
                    {props.letra}
                </p>
            </div>
        )
    }

    return (
        <div className="tecladoJogo">
            {alfabeto.map((item) => <Teclinha letra={item} />)}
        </div>
    )
}