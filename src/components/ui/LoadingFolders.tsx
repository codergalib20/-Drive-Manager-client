import styles from './LoadingFolders.module.css';

const LoadingFolders = () => {
    return (
        <div className={styles.loading_folders}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12].map((_, i) => (
                <div key={i} className={styles.loading_folder}>
                    <div className={styles.skeleton_cjklppchev2}>{<div></div>}</div>
                </div>
            ))}
        </div>
    )
};

export default LoadingFolders;