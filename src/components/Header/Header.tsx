import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
// import CreateModal from '../CreateModal';
import { useDispatch } from 'react-redux';
import styles from './Header.module.css';
import { userLoggedOut } from '../../feature/auth/authSlice';
import { useSelector } from 'react-redux';
const Header: React.FC = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: any) => state.auth) || {};
    const { email, name } = user || {};
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
                        <h2>{name}</h2>
                        <small style={{alignSelf: 'flex-end', marginLeft: '3px'}}>{email}</small>
                    </div>

                    <div className={styles.search_box}>
                        {/* <input className={styles.search_input} type="search" name="" placeholder='Search here...' id="" /> */}
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