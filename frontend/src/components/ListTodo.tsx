import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Edit, TimerIcon, Trash } from "lucide-react";
import { Button } from "./ui/button";
import MyAlertDialog from "./ui/MyAlertDialog";
import AddTodo from "./AddTodo";

const ListTodo = () => {
  const todo = {
    title: "Hello",
    description: "This is todo description lorem ipsum dolor sit amet mor dia ",
    urgency: "Very Urgent",
    date: "Janauary 15",
  };
  return (
    <div>
      <Card className="flex justify-between">
        <div className="content ">
          <CardHeader>
            <CardTitle>{todo.title}</CardTitle>
          </CardHeader>
          <CardContent className="gap-2 flex flex-col">
            <CardDescription>{todo.description}</CardDescription>
            <div className="flex gap-2">
              <Button variant={"secondary"}>
                <TimerIcon /> &nbsp; {todo.urgency}
              </Button>
              <Button variant={"secondary"}>
                <Calendar /> &nbsp; {todo.date}
              </Button>
            </div>
          </CardContent>
        </div>
        <CardFooter>
          <div className="edit-delete flex flex-wrap p-2 gap-2">
            <Button variant={"secondary"}>
              <Edit />
            </Button>
            <Button variant={"destructive"}>
              <MyAlertDialog
                trigger= { <Trash/> } 
                dialogTitle="Are you sure? "
                dialogDesc="Once the data is deleted it can't be undone. Are you sure? "
              />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ListTodo;
