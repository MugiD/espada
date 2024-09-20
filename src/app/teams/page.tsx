import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { UserIcon } from "lucide-react";

export default async function Hacks() {
  const teams = await db.team.findMany();

  return (
    <div className="max-w-5xl mx-auto mt-6">
      <div className="grid grid-col-1 gap-y-2">
        {teams.map((team) => (
          <Card key={team.id} className="py-4 px-8 rounded-md">
            <CardHeader>
              <CardTitle>{team.name}</CardTitle>
              <CardDescription>{team.description}</CardDescription>
            </CardHeader>
            <CardFooter >
              <div className="flex flex-start items-center gap-x-2">
                <UserIcon size={24} />
                {team.captainId}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
