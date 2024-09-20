import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db"; // Ensure prisma is imported
import EditDialog from "@/components/editDialog";

const UserDashboard = async () => {
  const user = await currentUser();

  const loggedUser = await db.user.findUnique({
    where: {
      clerkId: user?.id, // Use user.id from currentUser
    },
  });


  return (
    <div className="min-h-screen py-12 max-w-4xl m-auto px-4 sm:px-6 lg:px-8">
      <div className=" justify-center flex items-center space-x-10 mb-6">
        <Avatar className="h-20 w-20">
          <AvatarImage src={loggedUser?.profileImage || ""} alt={user?.id} />
          <AvatarFallback>
            {user?.firstName?.charAt(0)}
            {user?.lastName?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="items-center gap-y-2">
          <h2 className="text-2xl font-semibold">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-neutral-300">{loggedUser?.bio}</p>
        </div>
      </div>
      <div className="space-y-2">
        {loggedUser && <EditDialog id={loggedUser.clerkId!} />}
      </div>
    </div>
  );
};

export default UserDashboard;
