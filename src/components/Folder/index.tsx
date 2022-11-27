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
import LoadingButton from '../ui/LoadingButton';
import { Link, useNavigate } from 'react-router-dom';

const Folder = ({ folder }: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [deleteFolder, { isLoading, isError, isSuccess }] = useDeleteFolderMutation();
    const { isEditor } = useSelector((state: any) => state.handler);
    const handleOpenEditor = (handle: any): any => {
        dispatch(handleEditor(handle))
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
    const handleGo = () => {
        // Create a react router link to the folder
        if (!isSuccess || !isLoading) {
            navigate(`/folder/start/${folder.path}/end/${folder._id}/${folder.path}`);
        }
    }
    return (
        <div>
            {isEditor && <EditorFolder handleOpen={handleOpenEditor} />}
            <div className={styles.folder_card}>
                <button disabled={isLoading || isSuccess} onClick={() => handleOpenEditor(folder)} className={styles.editor}>
                    {isLoading || isSuccess ? <LoadingButton /> : <AiOutlineEdit />}
                </button>
                <button disabled={isLoading || isSuccess} onClick={handleDelete} className={styles.editor}>
                    {isLoading || isSuccess ? <LoadingButton /> : <AiFillDelete />}
                </button>
                <div onClick={handleGo} className={styles.touch_button}>
                    <FcOpenedFolder />
                </div>
            </div>
            <p className={styles.folder_name}>{folder.name?.substring(0, 13)}</p>
        </div>
    )
}
export default Folder