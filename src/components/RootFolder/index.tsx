import { useGetFolderByEmailQuery } from '../../feature/folders/folderApi';
import FolderLayout from '../FolderLayout';
import { useSelector } from 'react-redux';
import Folder from '../Folder';
import LoadingFolders from '../ui/LoadingFolders';
import Error from '../ui/Error';
import BlankMessage from '../ui/BlankMessage';

const RootFolder = () => {
    const { user } = useSelector((state: any) => state.auth) || {};
    const { email } = user || {};
    const { data: folders, isError, isLoading } = useGetFolderByEmailQuery({ email, parent: "root" });
    let content = null;
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]
    if (isLoading) {
        content = <LoadingFolders numbers={array} />
    }
    if (isError) {
        content = <Error />
    }
    if ((folders as any)?.data?.length === 0) {
        content = <BlankMessage message="No content show" />
    }
    if ((folders as any)?.data?.length > 0) {
        content = (
            //  Import folder_layout css from App.js
            <div className='folder_layout' >
                {
                    folders?.data?.map((folder: any) => <Folder
                        key={folder._id} folder={folder} />)
                }
            </div>
        )
    }


    return (
        <FolderLayout >
            <div>
                {content}
            </div>
        </FolderLayout>
    )
}
export default RootFolder