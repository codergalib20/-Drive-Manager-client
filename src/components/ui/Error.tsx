import styles from './Error.module.css';

type Props = {
    message?: string;
}
const errorString = "That was server error please reload your application";

const Error = ({ message = errorString }: Props) => {
    return (
        <div className={styles.error_box}>
            <p className={styles.error_message}>{message}</p>
        </div>
    )
}
export default Error