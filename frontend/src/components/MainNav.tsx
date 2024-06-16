import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 item-center">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          variant={"ghost"}
          className="font-bold hover:text-orange-500 hover:bg-white rounded-full px-4 py-2 transition-colors duration-300 ease-in-out border-2 border-orange-500"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
