import { Typography } from '@material-ui/core';
import styles from './Typewritter.module.scss';

const Typewritter: React.FC = () => {
  return (
    <Typography variant='h5' component='h1' className={styles.typewriter}>
      <div>
        <div className={`${styles.lines} ${styles.firstLine}`}>Hi,</div>
      </div>
      <div>
        <div className={`${styles.lines} ${styles.secondLine}`}>
          {`I'm Arnas Savickas,`}
        </div>
      </div>
      <div>
        <div className={`${styles.lines} ${styles.thirdLine}`}>
          a web developer.
        </div>
      </div>
    </Typography>
  );
};

export default Typewritter;
