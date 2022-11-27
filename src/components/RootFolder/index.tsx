import { useGetFolderByEmailQuery } from '../../feature/folders/folderApi';
import FolderLayout from '../FolderLayout';
import { useSelector } from 'react-redux';
import Folder from '../Folder';
import LoadingFolders from '../ui/LoadingFolders';
import Error from '../ui/Error';
import BlankMessage from '../ui/BlankMessage';
import AddFolder from '../AddFolder';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleAddFolder } from '../../feature/handler/handlerSlice';

const RootFolder = () => {
    const { user } = useSelector((state: any) => state.auth) || {};
    const { isAddFolder } = useSelector((state: any) => state.handler) || {};
    const { email } = user || {};
    const { data: folders, isError, isLoading } = useGetFolderByEmailQuery({ email, parent: "root" });
    const { path } = useParams();
    const dispatch = useDispatch();
    const handleOpen = () => {
        dispatch(handleAddFolder({ open: true }))
    }


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

            <>
                {/* //  Import folder_layout css from App.js */}
                <div className='folder_layout' >
                    {
                        folders?.data?.map((folder: any) => <Folder
                            key={folder._id} folder={folder} />)
                    }
                </div>
            </>
        )
    }


    return (
        <FolderLayout >
            {!isError && <div style={{
                marginBottom: '30px', width:
                    '100%',
                maxWidth: '1290px',
                margin: '0 auto',
                padding: '0 15px',

            }}>
                {isAddFolder && <AddFolder path={path} />}
                <button onClick={handleOpen} className="add_icon_button">
                    <AiOutlineAppstoreAdd />
                </button>
            </div>}
            <div>
                {content}
            </div>
        </FolderLayout>
    )
}
export default RootFolder