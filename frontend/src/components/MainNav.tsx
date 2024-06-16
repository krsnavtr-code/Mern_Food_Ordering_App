import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <Button
      variant={"ghost"}
      className="font-bold hover:text-orange-500 hover:bg-white rounded-full px-4 py-2 transition-colors duration-300 ease-in-out border-2 border-orange-500"
    >
      Log In
    </Button>
  );
};

export default MainNav;
