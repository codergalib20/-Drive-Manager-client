import React from "react";
type Props = {
    children: React.ReactNode;
};
const FolderLayout = ({ children }: Props) => {
    return (
        <div>
            {/* Children */}
            {children}
        </div>
    );
};

export default FolderLayout;