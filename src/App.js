import Logo from './components/logo';
import './App.css';
import perfil from './img/perfil.svg';
import sacola from './img/sacola.svg';


const textOptions = ['Categorias', 'Minha Estante', 'Favoritos'];
const icons = [sacola, perfil];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='options'>
          {textOptions.map((text) => (
            <li className = 'option'><p>{text}</p></li>
          ))}
        </ul>

        <ul className='icons'>
          {icons.map((icon) => (
            <li className='icon'><img src={icon} alt='icon'></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
