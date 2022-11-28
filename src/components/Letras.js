
export default function Letras({alfabeto, letraClickada, setLetraClickada}) {
    function clickarLetra(clickLetra){
        
        if(!letraClickada.includes(clickLetra)){
            setLetraClickada([...letraClickada, clickLetra])
        }
        console.log(letraClickada)
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
            {alfabeto.map((item) => <Teclinha letra={item}/>  )}
        </div>
    )
}