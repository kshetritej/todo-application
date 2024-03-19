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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { todo } from "@/types/todo.types";

const formatDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formatter.format(date);
};

const MyTodoDialog = ({
  trigger = <Plus />,
  buttonVariant = "default",
  todoTitle = "Add Todo",
  titleDesc = "What are your plans? ",
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("");
  const [date, setDate] = useState<Date>(new Date());

  //Lets add some todos
  const { mutate, isError, isPending } = useMutation({
    mutationKey: ["addTodo"],
    mutationFn: (data: todo) =>
      axios
        .post(`${import.meta.env.VITE_API_URL}/todo`, {
          Title: name,
          Description: description,
          Urgency: urgency,
          DueDate: formatDate(date),
        })
        .then(() => {
          //@ts-ignore
          setName("");
          setDescription("");
          setUrgency("");
          setDate(new Date());
          console.log("are values resetted?");
          return data;
        }),
  });
  useQueryClient().invalidateQueries({
    queryKey: ["getTodo"],
  });

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
                    <CalendarIcon />
                    {!date ? (
                      <span className="text-left">Pick a Date</span>
                    ) : (
                      format(date, "PPP")
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    //@ts-ignore
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button variant="secondary">Cancel</Button>
            {/*@ts-ignore*/}
            <Button type="button" onClick={mutate} variant="default">
              Save
            </Button>
          </CardFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default MyTodoDialog;
