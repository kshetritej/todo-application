import { useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import MyTodoDialog from "./MyTodoDialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { todo } from "@/types/todo.types";
import { Calendar, Edit2, TimerIcon, Trash } from "lucide-react";
import { Button } from "./ui/button";
const ListTodo = () => {
  const client = useQueryClient();
  //get Todo
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getTodo"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/todos`)
        .then((res) => res.data),
  });
  client.invalidateQueries({
    queryKey: ["getTodo"],
  });

  if (!data) return <>No data found.</>;
  if (isLoading) return <>Loading .... </>;
  if (isError) return <>Error occured while fetching data, {error}</>;

  return (
    <div>
      {data.map((task: todo, idx: number) => {
        return (
          <Card className="sm:flex justify-between flex-wrap  m-4" key={idx}>
            <div className="content  col-span-6">
              <CardHeader>
                <CardTitle>{task?.Title}</CardTitle>
              </CardHeader>
              <CardContent className="gap-2 flex flex-col">
                <CardDescription>{task?.Description}</CardDescription>
                <div className="flex gap-2 flex-wrap">
                  <Button variant={"secondary"}>
                    <TimerIcon /> &nbsp; {task?.Urgency}
                  </Button>
                  <Button variant={"secondary"}>
                    <Calendar /> &nbsp; {task?.DueDate}
                  </Button>
                </div>
              </CardContent>
            </div>
            <CardFooter>
              <div className="edit-delete flex gap-1">
                <MyTodoDialog
                  todoTitle="Edit Todo"
                  trigger={<Edit2 />}
                  titleDesc="Edit your todo"
                  mode={"edit"}
                />

                <Button variant={"destructive"}>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      {" "}
                      <Trash />{" "}
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle> Are you sure ?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Once item is deleted it can't be undone. Delete task?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </Button>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ListTodo;
