import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useAddFolderMutation } from "../../feature/folders/folderApi";
import { handleAddFolder } from "../../feature/handler/handlerSlice";
import CreateModal from "../CreateModal";
import LoadingButton from "../ui/LoadingButton";
import styles from './AddFolder.module.css';
type Props = {
    path?: string
}
const AddFolder = ({ path }: Props) => {
    const [addFolder, { isError, isLoading, isSuccess, }] = useAddFolderMutation();
    const [folderName, setFolderName] = useState('');
    const [folderPath, setFolderPath] = useState('');
    const { folders } = useSelector((state: any) => state.folders);
    const { user } = useSelector((state: any) => state.auth) || {};
    const { email } = user || {};
    const [conflict, setConflict] = useState<boolean>(false);
    const dispatch = useDispatch();

    const makeParent: string = path || 'root';
    const handleOpen = (): any => {
        dispatch(handleAddFolder({ open: true })) // open modal;
    }
    const handleChange = (e: string) => {
        setFolderName(e)
        const createPath = e.split(' ').join('-');
        setFolderPath(createPath);
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (folderName === '') {
            toast.error('Folder name is required');
        }
        if (folderPath === '') {
            toast.error('Folder path is required');
        }
        if (folderName !== '' && folderPath !== '') {
            addFolder({
                name: folderName,
                path: folderPath,
                user: email,
                parent: makeParent
            });
        }
    }
    useEffect(() => {
        const find = folders.find((folder: any) => folder.name === folderName);
        if (find) {
            setConflict(true);
        } else {
            setConflict(false);
        }
        if (conflict) {
            toast.warning('Folder name already exists');
        }
        if (isError) {
            toast.error('Network error occured');
        }
        if (isSuccess) {
            handleOpen();
            toast.success('Folder created successfully');
        }
    }, [conflict, isError, isSuccess, folderName, folders, handleOpen])
    return (
        <CreateModal handleOpen={handleOpen} >
            <div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div>
                        <input type="text"
                            value={folderName}
                            name="folderName" id="folderName" placeholder='Folder Name' onChange={(e) => handleChange(e.target.value)} />
                    </div>
                    {
                        !conflict && <div>
                            <button disabled={isLoading} type='submit'>
                                {isLoading || isSuccess ? <LoadingButton /> : 'Create'}
                            </button>
                        </div>
                    }
                </form>
            </div>
        </CreateModal>
    );
};

export default AddFolder;