import { createTeam } from "@/actions/action";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export default async function CreateTeamForm() {
  const user = await currentUser();

  const loggedUser = await db.user.findUnique({
    where: { clerkId: user?.id },
    select: { id: true }
  });

  const id = loggedUser?.id;
  const createTeamAction = id
    ? createTeam.bind(null, id)
    : () => {
        throw new Error("User ID is undefined");
      };

  return (
    <form action={createTeamAction} className="space-y-8 max-w-3xl mx-auto">
      <div className="grid grid-col-1 gap-y-2">
        <Label>Team Name</Label>
        <Input placeholder="Enter team name" name="name" />
      </div>
      <div className="grid grid-col-1 gap-y-2">
        <Label>Description</Label>
        <Textarea
          placeholder="Describe your team's purpose"
          className="resize-none"
          name="description"
        />
      </div>

      <Button type="submit" className="rounded-md">
        Create Team
      </Button>
    </form>
  );
}
