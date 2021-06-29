import logo from './assets/logo_black.svg';
import ConstructionSign from './components/ConstructionSign';

function App() {
  return (
    <>
      <header>
        <img src={logo} alt='alexandru curcubăt logo' /> 
      </header>
      <main>
        <ConstructionSign />
      </main>
      <footer>WEB / UI / UX</footer>
    </>
  );
}

export default App;
