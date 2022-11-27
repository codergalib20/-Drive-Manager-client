import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetFolderByEmailQuery } from '../../feature/folders/folderApi';
import Folder from '../Folder';
import BlankMessage from '../ui/BlankMessage';
import Error from '../ui/Error';
import LoadingFolders from '../ui/LoadingFolders';
import styles from './SingleFolder.module.css';


type PropsTypes = {
    success: boolean;
}
export default function FoldersShow({ success }: PropsTypes) {
    const { path } = useParams();
    const { user } = useSelector((state: any) => state.auth) || {};
    const { email } = user || {};
    const { data, isLoading, isError } = useGetFolderByEmailQuery({ email, parent: path });
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
            <div className={styles.folder_layout} >
                {
                    data?.data?.map((folder: any) => <Folder
                        key={folder._id} folder={folder} />)
                }
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}