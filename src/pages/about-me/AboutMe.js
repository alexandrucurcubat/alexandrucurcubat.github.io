import me from '../../assets/me_2020.png';

import styles from './AboutMe.module.css';

function AboutMe() {
  return (
    <section className='col-8'>
      <img className={styles.me} src={me} alt='alexandru curcubăt' />
      <h2>Hi, Alex here.</h2>
      <p>
        I am a software engineer from <strong>Brașov</strong>, Romania.
      </p>
      <p>
        My passion is <strong>web development</strong> and I'm currently
        pursuing a master's degree in Computer Science.
      </p>
      <p>
        My main focus is <strong>front-end</strong> web development, a field in which I have just
        under 3 years of experience. In this short period of time I was lucky
        to work on diverse projects, covering industries like{' '}
        <strong>e-commerce, automotive, banking and AI</strong>.{' '}
        <br></br> That being said, I have a constant craving for learning,
        especially if it's about technology.
      </p>
      <p>
        Lately I have started to embrace the world of <strong>UX</strong>,
        believing that focusing on user experience is the best path to a
        successful business.
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
