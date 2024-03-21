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
  const [urgency, setUrgency] = useState("");
  const [formData, setFormData] = useState({
    taskName: "",
    description: "",
    // urgency: "",
  });
  console.log(urgency)

  const [date, setDate] = useState<Date>(new Date());

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  console.log(formData)
  //Lets add some todos
  const { mutate, isError, isPending } = useMutation({
    mutationKey: ["addTodo"],
    mutationFn: (data) =>
      axios
        .post(`${import.meta.env.VITE_API_URL}/todo`, {
          Title: formData.taskName,
          Description: formData.description,
          Urgency: urgency,
          DueDate: formatDate(date),
        })
        .then(() => {
          // setFormData((formData) => ({
          //   ...formData,
          //   const {key,value} = useState({[key]:""})
          // }));
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
                name="taskName"
                value={formData.taskName}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="description" className="py-4">
                Description
              </Label>
              <br />
              <Textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="set some description dude."
              />
            </div>
            <div className="flex py-4 flex-col space-y-1.5">
              <Label htmlFor="urgency" className="py-2">
                Urgency
              </Label>
              <Select
                name="urgency"
                value={urgency}
                onValueChange={(value)=> setUrgency(value)}

              >
                <SelectTrigger name="urgency" id="urgency" value={urgency}>
                  <SelectValue  placeholder="Select urgency"/>
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value={"vimportant"}>Very Important</SelectItem>
                  <SelectItem  value={"normal"}>Normal</SelectItem>
                  <SelectItem  value={"not-important"}>Not Important</SelectItem>
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
