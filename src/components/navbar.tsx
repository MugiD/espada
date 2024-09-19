import React from "react";
import GithubLogin from "./loginWithGithub"; // Adjust the import path as necessary

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-16 pt-4">
        <h1>HackTuah</h1>
      <GithubLogin />
    </nav>
  );
};

export default Navbar;
