import Login from "./login"; // Adjust the import path as necessary
import Link from "next/link";

const Navbar = () => {

  return (
    <nav className="flex justify-between items-center px-16 py-4">
        <Link href="/"className="font-bold">Hack2</Link>
      <Login />
    </nav>
  );
};

export default Navbar;
