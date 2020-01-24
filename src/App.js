import React ,{Component} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error'

class App extends Component{

  state = {
    error:''
  }

  componentDidMount(){
    this.setState({
      error:false
    })
  }

  datosConsulta= respuesta => {
    //console.log(respuesta)
    if (respuesta.pais === '' || respuesta.ciudad === ''){
      //console.log('hay un error')
      this.setState({
        error:true
      })
    }else{
      console.log('todo correcto')
    }
  }
  
  render() {

    const error = this.state.error;
    
    let resultado;

    if (error){
      resultado = <Error mensaje="Ambos campos son obligatorios"></Error>
    }

    return (
      <div className="app">
        <Header titulo = 'Clima React'></Header>
        <Formulario datosConsulta={this.datosConsulta}></Formulario>
        {resultado}
      </div>
    );
  }
  
}

export default App;
