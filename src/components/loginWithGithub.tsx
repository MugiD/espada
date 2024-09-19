"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { loginWithGithub } from "@/lib/appwrite/auth";

const GithubLogin = () => {
  const handleLogin = () => {
    loginWithGithub();
  };

  return <Button onClick={handleLogin}>Login with GitHub</Button>;
};

export default GithubLogin;
