import { FcOpenedFolder } from 'react-icons/fc';
import styles from './Folder.module.css';
import { AiFillDelete, AiOutlineEdit, } from 'react-icons/ai';
import EditorFolder from '../EditorFolder';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { handleEditor } from '../../feature/handler/handlerSlice';
import { useDeleteFolderMutation } from '../../feature/folders/folderApi';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Folder = ({ folder }: any) => {
    const dispatch = useDispatch();
    const [deleteFolder, { isLoading, isError, isSuccess }] = useDeleteFolderMutation();
    const { isEditor } = useSelector((state: any) => state.handler);
    const handleOpen = () => {
        dispatch(handleEditor({ edit: true }))
    }
    const handleDelete = () => {
        deleteFolder(folder._id);
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Folder deleted successfully');
        }
        if (isError) {
            toast.error('Network error occured');
        }
    }, [isError, isSuccess])
    return (
        <div>
            {isEditor && <EditorFolder handleOpen={handleOpen} />}
            <div className={styles.folder_card}>
                <button disabled={isLoading} onClick={handleOpen} className={styles.editor}>
                    <AiOutlineEdit />
                </button>
                <button onClick={handleDelete} className={styles.editor}>
                    <AiFillDelete />
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