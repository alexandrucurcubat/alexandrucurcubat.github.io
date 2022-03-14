import me from '../../assets/sandu-cv.png';

import styles from './AboutMe.module.css';

function AboutMe() {
  return (
    <section className='col-8'>
      <img className={styles.me} src={me} alt='alexandru curcubăt' />
      <h2>Hi, Alex here.</h2>
      <p>
        I am a software engineer from <strong>Brașov</strong>, Romania, and I'm
        passionate about <strong>web development</strong>.
      </p>
      <p>
        My main focus is <strong>front-end</strong> engineering, a field in
        which I have 3 years of experience. <br /> In this period of time I was
        lucky to work on diverse projects, covering domains like{' '}
        <strong>e-commerce, automotive</strong> and <strong>AI</strong>. <br />{' '}
        That being said, I have a constant craving for learning, especially if
        it's about technology.
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
