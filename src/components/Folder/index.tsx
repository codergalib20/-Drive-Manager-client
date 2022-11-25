import { FcOpenedFolder } from 'react-icons/fc';
import styles from './Folder.module.css';
import { AiOutlineEdit, AiOutlineEllipsis } from 'react-icons/ai';
import EditorFolder from '../EditorFolder';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { handleEditor } from '../../feature/handler/handlerSlice';


const Folder = ({ folder }: any) => {
    const dispatch = useDispatch();
    const { isEditor } = useSelector((state: any) => state.handler);
    const handleOpen = () => {
        dispatch(handleEditor({ edit: true }))
    }
    return (
        <div>
            {isEditor && <EditorFolder handleOpen={handleOpen} />}
            <div className={styles.folder_card}>
                <button className={styles.editor}>
                    <AiOutlineEdit />
                </button>
                <button onClick={handleOpen} className={styles.editor}>
                    <AiOutlineEllipsis />
                </button>
                <div className={styles.touch_button}>
                    <FcOpenedFolder />
                </div>
            </div>
            <p className={styles.folder_name}>{folder.name?.substring(0, 13)}</p>
        </div>
    )
}
export default Folder