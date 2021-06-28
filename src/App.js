import styles from './App.module.css';
import logoText from './assets/logoText.svg';
import ConstructionSign from './components/ConstructionSign';

function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={logoText} alt='logo Alexandru Curcubăt' /> 
      </header>
      <main></main>
      <footer>
        <ConstructionSign />
      </footer>
    </>
  );
}

export default App;
