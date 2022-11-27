
import { useParams } from "react-router-dom";
import { useGetFolderByIdPathQuery } from "../../feature/folders/folderApi";
import BlankMessage from "../ui/BlankMessage";
import Error from "../ui/Error";


const SingleFolder = () => {
    const { id, path } = useParams();
    const { data, isLoading, isError, error } = useGetFolderByIdPathQuery({ id, path });

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
        let { name, user, path, parent } = data.data[0] || {};
        content = <div >
            <h1>{name}</h1>
            <h2>{user}</h2>
            <h2>{path}</h2>
            <h2>{parent}</h2>
        </div>
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
            hello
            Single Folder {id} + {path}
            {content}
        </div>
    )
};


export default SingleFolder;