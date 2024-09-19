"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Models } from "appwrite";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { account } from "@/lib/appwrite/appwrite";

const Dashboard = () => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const session = await account.get();
        setUser(session);
      } catch {
        router.push("/login");
      }
    };
    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await account.deleteSession("current");
    router.push("/login");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl m-auto">
      <Avatar>
        <AvatarImage src="" alt={user.name} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1>Welcome, {user.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
