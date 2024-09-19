import React from "react";
import GithubLogin from "./loginWithGithub"; // Adjust the import path as necessary
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-16 py-4">
        <Link href="/"className="font-bold">HackTuah</Link>
      <GithubLogin />
    </nav>
  );
};

export default Navbar;
