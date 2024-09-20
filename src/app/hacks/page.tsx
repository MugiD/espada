import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/db";

export default async function Hacks() {
  const hacks = await db.hack.findMany();

  return (
<div className="max-w-5xl mx-auto mt-6">
      <div className="grid grid-col-1 gap-y-2">
        {hacks.map((hack) => (
          <Card key={hack.id} className="py-4 px-8 rounded-md">
            <CardHeader>
              <CardTitle>{hack.title}</CardTitle>
              <CardDescription>{hack.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
