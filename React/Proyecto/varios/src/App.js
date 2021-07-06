import logo from './logo-personal-verde-recortado.png';
import './App.css';
import Eventos from './components/Eventos'
import PrimerHook from "./components/PrimerHook"
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <Nav />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://github.com/AndresGallegoGarrote/WorkSpace"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      
      </header>
      <Eventos />
      <PrimerHook />
      <Footer />
    </div>
  );
}

export default App;
