import blankMessageImage from '../../assets/no-content.gif';
import styles from './BlankMessage.module.css';

type PropsTypes = {
    message?: string;
}

const BlankMessage = ({ message }: PropsTypes) => {
    return (
        <div className={styles.blank_message_box}>
            <div>
                <div className={styles.blank_message_image_box} >
                    <img src={blankMessageImage} alt="blankMessageImage" />
                </div>
                <p className={styles.blank_message_text} >{message}</p>
            </div>
        </div>
    )
};

export default BlankMessage;