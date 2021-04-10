import styles from './FooterSection.module.scss';
import { Typography } from '@material-ui/core';
import ContactBtns from '../ContactBtns/ContactBtns';

const FooterSection: React.FC = () => {
  return (
    <section id='footer' className={styles.section}>
      <Typography>Liked what you saw? Contact me!</Typography>
      <ContactBtns />
      <Typography variant='subtitle2'>
        <a
          href='https://github.com/arnassavickas/portfolio'
          rel='noreferrer'
          target='_blank'
          className={styles.repo}
        >
          Built with Next.js and Material-UI
        </a>
      </Typography>
    </section>
  );
};

export default FooterSection;
