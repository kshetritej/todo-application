import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { CalendarIcon, Plus } from "lucide-react";
import { format } from "date-fns";

const MyTodoDialog = ({
  trigger = <Plus />,
  buttonVariant = "default",
  todoTitle = "Add Todo",
  titleDesc = "What are your plans? ",
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("");
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);
  return (
    <div className=" sm:w-[80%]">
      <Dialog>
        <DialogTrigger>
          {/*@ts-ignore*/}
          <Button variant={buttonVariant}>{trigger}</Button>
        </DialogTrigger>
        <DialogContent>
          <CardHeader>
            <CardTitle>{todoTitle}</CardTitle>
            <CardDescription>{titleDesc} </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <Label htmlFor="name" className="py-4">
                Name
              </Label>
              <br />
              <Input
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(name);
                }}
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
              <Select
                value={urgency}
                onValueChange={(value) => setUrgency(value)}
              >
                <SelectTrigger id="urgency" value={urgency}>
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value={"vimportant"}>Very Important</SelectItem>
                  <SelectItem value={"normal"}>Normal</SelectItem>
                  <SelectItem value={"not-important"}>Not Important</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/*Date picker */}
            <div className="flex py-2 flex-col space-y-1 5">
              <Label htmlFor="date" className="py-2">
                Due Date
              </Label>

              <Popover>
                <PopoverTrigger>
                <Button variant={"secondary"} className="flex gap-1 w-[100%]">
                  <CalendarIcon/>{
                    !date ? <span className="text-left">Pick a Date</span> : format(date,"PPP")
                  } 
                </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </PopoverContent>
              </Popover>
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
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default MyTodoDialog;
