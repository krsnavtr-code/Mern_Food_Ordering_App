import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const {  logout } = useAuth0();
  return (
    <>
      <Link
        className="flex bg-white item-center font-bold hover:text-orange-500 hover:bg-white rounded-full px-4 py-2 transition-colors duration-300 ease-in-out border-2 border-orange-500"
        to="/user-profile"
      >
        User Profile
      </Link>
      <Button onClick={() => logout()} className="flex item-center font-bold hover:text-orange-500 hover:bg-white rounded-full px-4 py-2 transition-colors duration-300 ease-in-out border-2 border-orange-500">
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
