import { useGetFolderByEmailQuery } from '../../feature/folders/folderApi';
import FolderLayout from '../FolderLayout';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import Folder from '../Folder';


const RootFolder = () => {
    const { user } = useSelector((state: any) => state.auth) || {};
    const { email } = user || {};
    const { data: folders, isError, isLoading, isSuccess } = useGetFolderByEmailQuery({ email, parent: "root" });
    let content = null;
    if (isLoading) {
        content = <div>Loading...</div>
    } else if (isError) {
        content = <div>That was server error please reload your application</div>
    } else if (isSuccess && (folders as any)?.data?.length === 0) {
        content = <div>No File </div>
    } else if (isSuccess && (folders as any)?.data?.length > 0) {
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
            <Header />
            <div>{content}</div>
        </FolderLayout>
    )
}
export default RootFolder