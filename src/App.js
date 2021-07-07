import logo from './assets/logo_black.svg';
import me from './assets/me_2020.png';

import ConstructionSign from './components/ConstructionSign';
import styles from './App.module.css';

function App() {
  return (
    <>
      <header>
        <img
          className={styles.aboutMeLogo}
          src={logo}
          alt='alexandru curcubăt logo'
        />
        <small>WEB / UI / UX</small>
      </header>
      <main>
        <section className={styles.aboutMe}>
          <img
            className={styles.aboutMeImg}
            src={me}
            alt='alexandru curcubăt'
          />
          <h2>Hi, Alex here.</h2>
          <p>
            I am a software engineer from Brașov, a beautiful city situated in
            the heart of Romanian mountains.
          </p>
          <p>
            I am passionate about web develeopment and I'm currently pursuing a
            master's degree in Computer Science.
          </p>
          <p>
            You can find more about me on my{' '}
            <a
              href='https://www.linkedin.com/in/alexandrucurcubat/'
              target='_blank'
              rel='noreferrer'
            >
              <strong>LinkedIn</strong>
            </a>{' '}
            page or on my{' '}
            <a
              href='https://github.com/alexandrucurcubat/'
              target='_blank'
              rel='noreferrer'
            >
              <strong>GitHub</strong>
            </a>{' '}
            page.
          </p>
        </section>
      </main>
      <footer>
        <ConstructionSign />
      </footer>
    </>
  );
}

export default App;
