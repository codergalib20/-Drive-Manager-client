import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
type Navigate = /*unresolved*/ any;
export default function PrivateRoute({ children }: any) {
  const isLoggeding = useAuth();
  const navigate: Navigate = useNavigate();
  return isLoggeding ? children : navigate("/signin");
}
