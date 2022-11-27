import styles from './SingleFolder.module.css';

type PropsTypes = {
    data: any;
}

export default function SidebarDetails({ data }: PropsTypes) {
    const { user, name, path, parent, createdAt, updatedAt } = data || {};
    return (
        <div className={styles.sidebar_details_parent}>
            <h3>Let's see about this folder</h3>
            <ul>
                <li>
                    <strong> Owner : </strong>
                    <span>{user}</span>
                </li>
                <li>
                    <strong> Folder Name : </strong>
                    <span>{name}</span>
                </li>
                <li>
                    <strong> Path : </strong>
                    <span>{path}</span>
                </li>
                <li>
                    <strong> Parent : </strong>
                    <span>{parent}</span>
                </li>
                <li>
                    <strong> Created  At : </strong>
                    <span>{createdAt}</span>
                </li>
                <li>
                    <strong> Last  Updated At : </strong>
                    <span>{updatedAt}</span>
                </li>
            </ul>
        </div>
    )
}