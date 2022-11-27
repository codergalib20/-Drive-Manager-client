import { useEffect, useState } from 'react';
import styles from './EditorFolder.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useUpdateFolderMutation } from '../../feature/folders/folderApi';
import { toast } from 'react-toastify';
import LoadingButton from '../ui/LoadingButton';

type Props = {
    handleOpen: any;
}
const EditorFolder = ({ handleOpen }: Props) => {
    const { isEditor } = useSelector((state: any) => state.handler) || {};
    const { folders } = useSelector((state: any) => state.folders) || [];
    const [updateFolder, { isSuccess, isError, isLoading }] = useUpdateFolderMutation()
    const { name, _id } = isEditor || {};
    const [folderName, setFolderName] = useState<string>(name || '');
    const [conflict, setConflict] = useState<boolean>(false);

    const handleChange = (e: string) => {
        setFolderName(e);
    }
    const animation = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -100
        }
    }

    const handleUpdatefolder = (e: any) => {
        e.preventDefault();
        if (folderName === '') {
            toast.error('Folder name is required');
        }
        if (folderName !== '') {
            updateFolder({
                id: _id,
                folder: {
                    name: folderName,
                    path: folderName.split(' ').join('-'),
                }
            })
        }
    }

    useEffect(() => {
        const find = folders.find((folder: any) => folder.name === folderName);
        if (find) {
            setConflict(true);
        } else {
            setConflict(false);
        }
        if (isSuccess) {
            toast.success('Folder updated successfully');
            handleOpen(null);
        }
        if (isError) {
            toast.error('Network error occured');
        }
    }, [isSuccess, isError, folderName, folders, handleOpen])

    return (
        <motion.div
            variants={animation}
            className={styles.card_modal}>
            <div className={styles.card_modal_content}>
                <button
                    disabled={isLoading || isSuccess}
                    onClick={() => handleOpen(null)}
                    className={styles.close_modal}>
                    {(isLoading || isSuccess) ? <LoadingButton /> : <AiOutlineClose />}
                </button>
                <div>
                    <form onSubmit={handleUpdatefolder} style={{ width: '100%' }}>
                        <input
                            value={folderName}
                            onChange={(e) => handleChange(e.target.value)}
                            type="text"
                            placeholder='Folder name'
                            className={styles.input} />
                        {conflict && <p style={{ color: 'red' }}>Folder name already exists</p>}
                        {!conflict && <button
                            disabled={isLoading || isSuccess}
                            type="submit"
                            className={styles.button}
                        >
                            Save
                            {(isLoading || isSuccess) && <LoadingButton />}
                        </button>}
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default EditorFolder