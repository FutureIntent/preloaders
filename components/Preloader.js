import styles from '@components/preloaders/styles/Preloader.module.scss';

const Preloader = () => (
    <div className={styles.preloader_wrapper}>
        <div className={styles.circle_0} />
        <div className={styles.circle_1} />
        <div className={styles.circle_2} />
        <div className={styles.circle_3} />
        <div className={styles.circle_4} />
    </div>
);


export default Preloader;