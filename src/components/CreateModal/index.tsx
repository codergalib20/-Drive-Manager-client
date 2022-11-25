import styles from './CreateModa.module.css';
import { AnimatePresence, motion } from 'framer-motion';
type Props = {
    children: React.ReactNode;
    handleOpen: () => void;
}

export default function CreateModal({ children, handleOpen }: Props) {
    const animation = {
        hidden: {
            opacity: 0,
            y: '-100vh'
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 2,
                duration: 2
            }
        },
        exit: {
            opacity: 0,
            y: '-100vh',
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <AnimatePresence>
            <motion.div
                variants={animation}
                className={styles.modal_body} >
                <div className={styles.modal_container}>
                    <div className={styles.modal_header}>
                        <div className={styles.modal_header_title}>
                            <h3>Create New</h3>
                        </div>
                        <div onClick={handleOpen} className={styles.modal_header_close}>
                            <button>X</button>
                        </div>
                    </div>
                    <div className={styles.modal_content}>
                        {children}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}