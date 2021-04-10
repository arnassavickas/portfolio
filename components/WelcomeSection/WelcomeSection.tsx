import styles from './WelcomeSection.module.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import Typewritter from './Typewriter/Typewriter';
import ContactBtns from '../ContactBtns/ContactBtns';

const WelcomeSection: React.FC = () => {
  const smoothScrollTo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.welcomeSection}>
      <ContactBtns />
      <Typewritter />
      <IconButton
        onClick={smoothScrollTo}
        size='small'
        disableRipple
        className={styles.moreBtn}
      >
        <ExpandMoreIcon />
      </IconButton>
    </section>
  );
};

export default WelcomeSection;
