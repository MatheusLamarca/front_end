import './Mensagem.css'

const Mensagem = (props)=>{
    console.log(props.titulo)
    return(<div className='mensagemBox' 
    style={{
        "background-color": props.cor
            }}>
                <h1 className='mensagemTitulo'> {props.titulo} </h1>
                <h2 className='mensagemSubTitulo'> ReactJS </h2>
            </div>) 
    
}

export default Mensagem
