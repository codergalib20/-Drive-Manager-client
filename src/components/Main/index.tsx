import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import RootFolder from "../RootFolder";
import SingleFolder from "../SingleFolder";

const Main = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<RootFolder />} />
                {/* <Route path="*" element={<RootFolder />} /> */}
                <Route path="folder/:id/:path" element={<SingleFolder />} />
            </Routes>
        </div>
    );
};

export default Main