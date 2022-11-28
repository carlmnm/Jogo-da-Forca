
export default function Letras({ alfabeto, letraClickada, setLetraClickada, rightWord, palavraSelecionada, setPalavraSelecionada, arrayPalavra, setArrayPalavra}) {
    function clickarLetra(clickLetra) {
        let letraCerta = ""

        if (!letraClickada.includes(clickLetra)) {
            setLetraClickada([...letraClickada, clickLetra])
        }

    }

    function Teclinha(props) {
        return (
            <div onClick={() => clickarLetra(props.letra)} className={`${letraClickada.includes(props.letra) ? "clickado" : "nao-clickado"}`} >
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