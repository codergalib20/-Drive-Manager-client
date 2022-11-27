import styles from './SingleFolder.module.css';
import { useParams } from "react-router-dom";
import { useGetFolderByIdPathQuery } from "../../feature/folders/folderApi";
import BlankMessage from "../ui/BlankMessage";
import Error from "../ui/Error";
import SidebarDetails from './SidebarDetails';
import FoldersShow from './FoldersShow';


const SingleFolder = () => {
    const { id, path } = useParams();
    const { data, isLoading, isError, isSuccess } = useGetFolderByIdPathQuery({ id, path });

    let content = null;
    if (isLoading) {
        content = <div className="loader_parent_body" >
            <div className="lds-hourglass"></div>
        </div >
    }

    if (isError) {
        content = <Error />
    }

    if (!isLoading && !data?.data[0]?.user) {
        content = <BlankMessage message="No data found!" />
    }
    if (data?.data[0]?.user) {
        let currentData = data.data[0] || {};
        content = (
            <div className={styles.single_folder_parent}>
                {/* Main Content */}
                <FoldersShow success={isSuccess} />
                {/* Sidebar Details */}
                <SidebarDetails data={currentData} />
            </div>
        )
    }

    return (
        <div
            style={{
                width: "100%",
                maxWidth: "1290px",
                margin: "0 auto",
                padding: "15px 20px",
            }
            }
        >
            {content}
        </div>
    )
};


export default SingleFolder;