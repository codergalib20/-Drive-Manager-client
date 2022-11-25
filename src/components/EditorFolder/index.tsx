import { useState } from 'react';
import styles from './EditorFolder.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

type Props = {
    handleOpen: () => void;
}
const EditorFolder = ({ handleOpen }: Props) => {
    const [folderName, setFolderName] = useState<string>("");
    const handleChange = (e: string) => {
        console.log("handleChange", e);
        setFolderName(e);
    }
    const animation = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -100
        }
    }


    return (
        <motion.div
            variants={animation}
            className={styles.card_modal}>
            <div className={styles.card_modal_content}>
                <span onClick={handleOpen} className={styles.close_modal}>
                    <AiOutlineClose />
                </span>
                <div>
                    <form style={{ width: '100%' }}>
                        <input
                            value={folderName}
                            onChange={(e) => handleChange(e.target.value)}
                            type="text"
                            placeholder='Folder name'
                            className={styles.input} />
                        <button
                            type="submit"
                            className={styles.button}
                        >Save</button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default EditorFolder