import UseAuth from "../Hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import UseMember from "../Hook/useMember";

const MemberRoute = ({children}) => {
  const { user, loading } = UseAuth();
  const [isMember, isMemberLoading] = UseMember();
  const location = useLocation();
  if(loading || isMemberLoading){
    return <progress className="progress w-56"></progress>;
  }
  if(user && isMember){
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default MemberRoute;
