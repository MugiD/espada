import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async () => {
  const user = await currentUser();
  console.log(user);

  if (!user) {
    return null;
  }

  const dbUser = await db.user.findUnique({
    where: { clerkId: user.id },
  });

  if (dbUser) {
    return dbUser;
  }

  const newUser = await db.user.create({
    data: {
      clerkId: user.id,
      name: user.firstName,
      lastName: user.lastName,
      profileImage: user.imageUrl || null,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
