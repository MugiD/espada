import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { editUser } from "@/actions/action";

const EditDialog = ({ id }: { id: string }) => {
  const editUserProfile = editUser.bind(null, id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <form action={editUserProfile} className="space-y-4">
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Input id="bio" name="bio" placeholder="Tell us about yourself" />
          </div>
          <DialogClose asChild>
            <Button type="submit">Save Changes</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
