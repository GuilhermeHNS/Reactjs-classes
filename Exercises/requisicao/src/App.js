import React, {Component} from 'react'
import Style from './Style.css'

//https://sujeitoprogramador.com/rn-api/?api=posts

class App extends Component{

    constructor(props){
        super(props)
        this.state={
            nutri:[]
        }
    }

    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
        fetch(url)
        .then((r)=>r.json())
        .then((json)=>{
            let state = this.state
            state.nutri = json
            this.setState(state)
        })
    }
   

    render(){
        return(
            <div className="container">
                <header>
                    <h1>React Nutri</h1>
                </header>
                {this.state.nutri.map((item)=>{
                    return(
                        <article key={item.id} className="post">
                            <strong className="titulo">{item.titulo}</strong>
                            <img src={item.capa} className="capa"></img>
                            <p className="subtitulo">{item.subtitulo}</p>
                            <a className="botao" href="#">Veja mais!</a>
                        </article>
                    )
                })}


            </div>
        )
    }
}

export default App