import { AiOutlineMenu, AiOutlineAppstoreAdd } from 'react-icons/ai';
import AddFolder from '../AddFolder';
import CreateModal from '../CreateModal';
import styles from './Header.module.css';
const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.container_wrapper}>
                    <div className={styles.buttons}>
                        <button><AiOutlineMenu /></button>
                        <button><AiOutlineMenu /></button>
                        <button><AiOutlineMenu /></button>
                        <button><AiOutlineMenu /></button>
                    </div>
                    <div>
                        <button className={styles.add_icon_button}>
                            <AiOutlineAppstoreAdd />
                        </button>
                    </div>
                    <div>
                        <input className={styles.search_input} type="search" name="" placeholder='Search here...' id="" />
                    </div>
                </div>
            </div>
            {/* <AddFolder /> */}
        </div>
    )
}
export default Header