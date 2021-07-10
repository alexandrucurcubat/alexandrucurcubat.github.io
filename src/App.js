import styles from './App.module.css';
import logo from './assets/logo_black.svg';
import ConstructionSign from './components/ConstructionSign';
import AboutMe from './pages/about-me/AboutMe';

const App = () => (
  <>
    <header>
      <img className={styles.logo} src={logo} alt='alexandru curcubat logo' />
      <small>WEB / UI / UX</small>
    </header>
    <main>
      <AboutMe />
    </main>
    <footer>
      <ConstructionSign />
    </footer>
  </>
);

export default App;
