import me from '../../assets/me_2020.png';

import styles from './AboutMe.module.css';

function AboutMe() {
  return (
    <section>
      <img className={styles.me} src={me} alt='alexandru curcubăt' />
      <h2>Hi, Alex here.</h2>
      <p>
        I am a software engineer from Brașov, a beautiful city situated in the
        heart of Romanian mountains.
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
        page or on{' '}
        <a
          href='https://github.com/alexandrucurcubat/'
          target='_blank'
          rel='noreferrer'
        >
          <strong>GitHub</strong>
        </a>
        .
      </p>
    </section>
  );
}

export default AboutMe;
