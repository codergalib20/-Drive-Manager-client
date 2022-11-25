import axios from "axios";
import { useEffect, useState } from "react";
import CreateModal from "../CreateModal";
import styles from './AddFolder.module.css';
const AddFolder = () => {
    const [folderName, setFolderName] = useState('');
    const [folderPath, setFolderPath] = useState('');

    const handleChange = (e: string) => {
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(folderName, folderPath);
    }

    // const getData = async () => {
    //     const res = await axios.get('https://geolocation-db.com/json/')
    //     console.log(res.data);
    // }
    // useEffect(() => {
    //     getData();
    // }, [])


    return (
        <CreateModal >
            <div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div>
                        <input type="text"
                            value={folderName}
                            name="folderName" id="folderName" placeholder='Folder Name' onChange={(e) => setFolderName(e.target.value)} />
                    </div>
                    <div>
                        <button type='submit'>Add Folder</button>
                    </div>
                </form>
            </div>
        </CreateModal>
    );
};

export default AddFolder;