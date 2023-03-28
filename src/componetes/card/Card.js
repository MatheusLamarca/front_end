import "./Card.css"
import cardImg from "./img/card.png"
import upImg from "./img/up.png"
import downImg from "./img/down.png"
import { useState } from "react"

const Card = (props)=>{
    const defCssCor = {
        "border-color": props.cor,
    }

    const [aberto, setAberto] = useState(props.aberto==="true")

    const openClose =()=>{
        setAberto( aberto ? false : true )
    }
    return (
        <div className="card_container" style={defCssCor}>
            <div className="card_head"
            style={ {"background-color": props.cor}} >
                <img src={cardImg} alt="error" />
                <span>{props.titulo}</span> 
                <img src={aberto?upImg:downImg} alt="error" onClick={openClose} />
            </div>
            <div className={"card_body "+(aberto?"show":"hide")}>
                {props.children}
            </div>
        </div>
    )

}

export default Card
