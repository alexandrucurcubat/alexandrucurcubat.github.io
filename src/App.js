import styles from './App.module.css';
import logo from './assets/logo.png';
import AboutMe from './pages/about-me/AboutMe';

const App = () => (
  <>
    <header>
      <figure>
        <img className={styles.logo} src={logo} alt='alexandru curcubat logo' />
        <figcaption>Alexandru Curcubăt</figcaption>
      </figure>
    </header>
    <main>
      <AboutMe />
    </main>
    <footer>
      <small>WEB / UI / UX</small>
    </footer>
  </>
);

export default App;
