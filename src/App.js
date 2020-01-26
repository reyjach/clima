import React ,{Component} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error'
import Clima from './componentes/Clima'

class App extends Component{

  state = {
    error: '',
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.consulta !== this.state.consulta){
      this.consultarApi();
    }
    
  }

  componentDidMount(){
    this.setState({
      error:false
    })
  }

  consultarApi = () =>{
    const {ciudad,pais} = this.state.consulta;
    if(!ciudad || !pais) return null;

    //leer la URL y agregar el api key


    const appId= '198addffd476b8604134b211fe79cdf0';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    //console.log(url);

    // query con fetch api
    fetch(url)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(datos => {
      this.setState({
        resultado:datos
      })
    })
    .catch(error => {
      console.log(error)
    })
    
    //console.log(ciudad)
  }

  datosConsulta= respuesta => {
    //console.log(respuesta)
    if (respuesta.pais === '' || respuesta.ciudad === ''){
      //console.log('hay un error')
      this.setState({
        error:true
      })
    }else{
      this.setState({
        consulta:respuesta,
        error:false
      })
    }
  }
  
  render() {

    const error = this.state.error;
    
    let resultado;

    if (error){
      resultado = <Error mensaje="Ambos campos son obligatorios"></Error>
    }else{
      resultado = <Clima resultado={this.state.resultado}></Clima>
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
