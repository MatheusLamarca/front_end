import { useState } from "react"
import "./Contador.css"

const Contador = (props)=>{

   const [contador , setContador] 
   = useState(props.valor? parseInt(props.valor) : 0 )

    const operacao = (evt)=>{
        evt.target.dataset.op === '+'?
        setContador( contador + 1 ):
        setContador( contador - 1 )
        console.log(contador, evt.target.dataset.op)
    }

return (
    <div className="Contador_Container">
        <h1>{contador}</h1>
        <div>
            <button onClick={operacao} data-op="+" >+1</button>
            <button onClick={operacao} data-op="-" >-1</button>
        </div>
    </div>
)

}

export default Contador