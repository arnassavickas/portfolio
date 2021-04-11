import styles from './AboutMeSection.module.scss';
import { Typography } from '@material-ui/core';

const AboutMeSection: React.FC = () => {
  return (
    <section id='about' className={styles.section}>
      <picture>
        <source srcSet='/images/profile.webp' type='image/webp' />
        <source srcSet='/images/profile.jpg' type='image/jpeg' />
        <img
          className={styles.profile}
          src='/images/profile.jpg'
          alt='Picture of the author'
          width='200'
          height='200'
        />
      </picture>
      <Typography variant='h4' component='h2'>
        About Me
      </Typography>
      <p className={styles.paragraph}>
        Since childhood, I have felt like I should be making a career in IT.
        Unfortunately, one decision after another, and I have moved my life in
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
