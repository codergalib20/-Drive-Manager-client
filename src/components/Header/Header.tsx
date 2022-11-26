import { AiOutlineMenu, AiOutlineAppstoreAdd, AiOutlineLogout } from 'react-icons/ai';
import AddFolder from '../AddFolder';
// import CreateModal from '../CreateModal';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.css';
import { handleAddFolder } from '../../feature/handler/handlerSlice';
import { userLoggedOut } from '../../feature/auth/authSlice';


const Header: React.FC = () => {
    const dispatch = useDispatch();
    const { isAddFolder } = useSelector((state: any) => state.handler) || {};

    const handleOpen = () => {
        dispatch(handleAddFolder({ open: true }))
    }
    const handleLogout = () => {
        dispatch(userLoggedOut());
        localStorage.removeItem('folder_manager');
        window.location.reload();
    }
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
                        <button onClick={handleOpen} className={styles.add_icon_button}>
                            <AiOutlineAppstoreAdd />
                        </button>
                    </div>
                    <div className={styles.search_box}>
                        <input className={styles.search_input} type="search" name="" placeholder='Search here...' id="" />
                        <button onClick={handleLogout}>
                            <AiOutlineLogout />
                        </button>
                    </div>
                </div>
            </div>
            {isAddFolder && <AddFolder />}
        </div>
    )
}
export default Header