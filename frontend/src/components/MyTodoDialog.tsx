import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { DatePickerWithPresets } from "./ui/date-picker";
import { Plus } from "lucide-react";

const MyTodoDialog = ({
  trigger = <Plus />,
  buttonVariant = "default",
  todoTitle = "Add Todo",
  titleDesc = "What are your plans? ",
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant={buttonVariant}>{trigger}</Button>
        </DialogTrigger>
        <DialogContent>
          <Card className="border-0">
            <CardHeader>
              <CardTitle>{todoTitle}</CardTitle>
              <CardDescription>{titleDesc} </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col">
                <Label htmlFor="name" className="py-4">
                  Name
                </Label>{" "}
                <br />
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="desc" className="py-4">
                  Description
                </Label>
                <br />
                <Textarea
                  id="desc"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="set some description dude."
                />
              </div>
              <div className="flex py-4 flex-col space-y-1.5">
                <Label htmlFor="urgency" className="py-2">
                  Urgency
                </Label>
                <Select>
                  <SelectTrigger id="urgency">
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="vimp">Very Important</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="not-important">Not Important</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex py-2 flex-col space-y-1 5">
                <Label htmlFor="urgency" className="py-2">
                  Date
                </Label>
                <DatePickerWithPresets />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="submit" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" variant="default">
                Save
              </Button>
            </CardFooter>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default MyTodoDialog;
