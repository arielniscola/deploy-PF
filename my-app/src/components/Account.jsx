import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import OwnerDashboard from "./OwnerDashboard";
import UserDashBoard from "./UserDashboard";
import Develop from "./DeveloperDashBoard";

const Account = () => {
  const currentUser = useSelector((state) => state.currentUser);

  if (!currentUser) return <Navigate to="/login" replace />;

  if (currentUser?.rol === "admin") return <Develop />;

  return (
    <>
      {currentUser?.rol === "owner" ? (
        <>
          <UserDashBoard />
          <OwnerDashboard />
        </>
      ) : (
        <UserDashBoard />
      )}
    </>
  );
};

export default Account;
