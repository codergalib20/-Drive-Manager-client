import React from "react";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import useAuthCheckHook from "./hooks/useAuthCheckHook";
import PrivateRoute from "./hooks/PrivateRoute";
import "./App.css"
import PublicRoute from "./hooks/PublicRoute";
import Main from "./components/Main";

const App: React.FC = () => {

  const authChecked = useAuthCheckHook();
  return !authChecked ? (
    <div className="loader_parent_body">
      <div className="lds-hourglass"></div>
    </div>
  ) : (
    <Routes>
      <Route path="/" element={
        <PrivateRoute>
          <Main />
        </PrivateRoute>
      } />
      <Route path="*" element={
        <PrivateRoute>
          <Main />
        </PrivateRoute>
      } />
      <Route path="signin" element={
        <PublicRoute>
          <SignIn />
        </PublicRoute>
      } />
      <Route path="signup" element={
        <PublicRoute>
          <Signup />
        </PublicRoute>
      } />
    </Routes>
  )
};

export default App;