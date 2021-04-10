import styles from './Typewritter.module.scss';

const Typewritter: React.FC = () => {
  return (
    <div className={styles.typewriter}>
      <div>
        <h2 className={`${styles.lines} ${styles.firstLine}`}>Hi,</h2>
      </div>
      <div>
        <h2 className={`${styles.lines} ${styles.secondLine}`}>
          {`I'm Arnas Savickas,`}
        </h2>
      </div>
      <div>
        <h2 className={`${styles.lines} ${styles.thirdLine}`}>
          a web developer.
        </h2>
      </div>
    </div>
  );
};

export default Typewritter;
