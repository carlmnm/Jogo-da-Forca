export default function Teclado() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    function Teclinha(props) {
        return (
            <div className="tecla">
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