import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoggedinVarificationQuery } from "../feature/auth/authApi";
import { userLoggedIn } from "../feature/auth/authSlice";
export default function useAuthCheckHook() {
  const { data } = useLoggedinVarificationQuery({ skip: true });
  useLoggedinVarificationQuery({ skip: false });
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage?.getItem("folder_manager");
    if (token) {
      dispatch(userLoggedIn(token));
    }
    setAuthChecked(true);
  }, [dispatch]);
  return authChecked;
}
