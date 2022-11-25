import React from "react";
import RootFolder from "./components/RootFolder";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import useAuthCheckHook from "./hooks/useAuthCheckHook";
import PrivateRoute from "./hooks/PrivateRoute";


const App: React.FC = () => {

  const authChecked = useAuthCheckHook();
  return !authChecked ? (
    <div className="loader_parent_body">
      <div className="lds-hourglass"></div>
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<PrivateRoute><RootFolder /></PrivateRoute>}
      />
      <Route path="*" element={<RootFolder />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  )
};

export default App;