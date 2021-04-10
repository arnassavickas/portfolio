import styles from './AboutMeSection.module.scss';
import { Typography } from '@material-ui/core';

const AboutMeSection: React.FC = () => {
  return (
    <section id='about' className={styles.section}>
      <img
        src='/images/profile.jpg'
        alt='Picture of the author'
        className={styles.profile}
      />
      <Typography variant='h4' component='h2'>
        About Me
      </Typography>
      <p className={styles.paragraph}>
        Since learning how to reinstall Windows XP in 5th grade, I have always
        felt like I should be doing{' '}
        <span className='italic'>something with the computers</span>.
      </p>
      <p className={styles.paragraph}>
        Unfortunatelly, one decision after another, and I have moved my life at
        an entirely different direction - engineering and sales.
      </p>
      <p className={styles.paragraph}>
        But the time has come to follow my dreams and finally become a
        developer. So please take a look at what I have learned and done so far
        :)
      </p>
    </section>
  );
};

export default AboutMeSection;
