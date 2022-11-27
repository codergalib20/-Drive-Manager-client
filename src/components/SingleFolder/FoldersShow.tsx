import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useGetFolderByEmailQuery } from '../../feature/folders/folderApi';
import { handleAddFolder } from '../../feature/handler/handlerSlice';
import Folder from '../Folder';
import BlankMessage from '../ui/BlankMessage';
import Error from '../ui/Error';
import LoadingFolders from '../ui/LoadingFolders';
import styles from './SingleFolder.module.css';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddFolder from '../AddFolder';

type PropsTypes = {
    success: boolean;
    errors: any;
}
export default function FoldersShow({ success, errors }: PropsTypes) {
    const { path, id } = useParams();
    const { user } = useSelector((state: any) => state.auth) || {};
    const { email } = user || {};
    const { data, isLoading, isError } = useGetFolderByEmailQuery({ email, parent: id });
    const { isAddFolder } = useSelector((state: any) => state.handler) || {};

    const dispatch = useDispatch();
    const handleOpen = () => {
        dispatch(handleAddFolder({ open: true }))
    }
    let content = null;
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8,]
    if (isLoading) {
        content = <LoadingFolders numbers={array} />
    }
    if (isError) {
        content = <Error />
    }
    if ((data as any)?.data?.length === 0) {
        content = <BlankMessage message="No content show" />
    }
    if ((data as any)?.data?.length > 0) {
        content = (
            //  Import folder_layout css from App.js
            <div>
                <div className={styles.folder_layout} >
                    {
                        data?.data?.map((folder: any) => <Folder
                            key={folder._id} folder={folder} />)
                    }
                </div>
            </div>
        )
    }
    return (
        <div className={styles.data_show_box}>
            {!errors && <div style={{ marginBottom: '30px', }}>
                {isAddFolder && <AddFolder path={path} id={id} />}
                <button onClick={handleOpen} className="add_icon_button">
                    <AiOutlineAppstoreAdd />
                </button>
            </div>}
            {content}
        </div>
    )
}