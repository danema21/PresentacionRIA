import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import PropsManipulation from './components/PropsManipulation';

export default function App() {

  const funcion = () => {
    alert("soy una funcion  del componente APP");
  }

  //return <PropsManipulation name="hola mundo" value={1} funcionPasada={funcion}/>
  //return <Counter />
  //return <HelloWorld cadena="Mundo"/>
  return null;
}