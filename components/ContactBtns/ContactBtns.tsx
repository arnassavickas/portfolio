import styles from './ContactBtns.module.scss';
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

const ContactBtns: React.FC = () => {
  return (
    <div className={styles.contactBtns}>
      <IconButton href='https://github.com/arnassavickas' target='_blank'>
        <GitHubIcon />
      </IconButton>
      <IconButton
        href='https://www.linkedin.com/in/arnas-savickas/'
        target='_blank'
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton href='mailto:arnas.savi@gmail.com' target='_blank'>
        <MailIcon />
      </IconButton>
    </div>
  );
};

export default ContactBtns;
