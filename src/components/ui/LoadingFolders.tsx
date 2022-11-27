import styles from './LoadingFolders.module.css';
type PropsTypes = {
    numbers: number[];
}
const LoadingFolders = ({ numbers }: PropsTypes) => {
    return (
        <div className={styles.loading_folders}>
            {numbers.map((_, i) => (
                <div key={i} className={styles.loading_folder}>
                    <div className={styles.skeleton_cjklppchev2}>{<div></div>}</div>
                </div>
            ))}
        </div>
    )
};

export default LoadingFolders;