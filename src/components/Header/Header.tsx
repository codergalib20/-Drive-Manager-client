import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
// import CreateModal from '../CreateModal';
import { useDispatch } from 'react-redux';
import styles from './Header.module.css';
import { userLoggedOut } from '../../feature/auth/authSlice';
const Header: React.FC = () => {
    const dispatch = useDispatch();
    // select string from / to last length
    // const path = location.pathname.slice('1', location.pathname.length);

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

                    <div className={styles.search_box}>
                        <input className={styles.search_input} type="search" name="" placeholder='Search here...' id="" />
                        <button onClick={handleLogout}>
                            <AiOutlineLogout />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header