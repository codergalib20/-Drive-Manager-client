import { useSelector } from "react-redux";
export default function useAuth() {
  const auth = useSelector<any>((state) => state.auth);
  if (!(auth as any)?.token && !(auth as any)?.user && !(auth as any)?.user?.email) {
    return false;
  } else {
    return true;
  }
}
