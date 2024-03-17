import { useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
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
import MyTodoDialog from "./MyTodoDialog";

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
      {data.map((todo: todo, idx: number) => {
        return (
          <Card className="sm:flex justify-between flex-wrap  m-4" key={idx}>
            <div className="content  col-span-6">
              <CardHeader>
                <CardTitle>{todo?.Title}</CardTitle>
              </CardHeader>
              <CardContent className="gap-2 flex flex-col">
                <CardDescription>{todo?.Description}</CardDescription>
                <div className="flex gap-2 flex-wrap">
                  <Button variant={"secondary"}>
                    <TimerIcon /> &nbsp; {todo?.Urgency}
                  </Button>
                  <Button variant={"secondary"}>
                    <Calendar /> &nbsp; {todo?.DueDate}
                  </Button>
                </div>
              </CardContent>
            </div>
            <CardFooter>
              <div className="edit-delete flex gap-1">
                <MyTodoDialog
                  buttonVariant="secondary"
                  trigger={<Edit />}
                  todoTitle="Edit Todo"
                  titleDesc="Edit your todo"
                />
                <Button variant={"destructive"}>
                  <MyAlertDialog
                    buttonColor="bg-red-500 hover:bg-red-300"
                    trigger={<Trash />}
                    dialogTitle="Are you sure? "
                    dialogDesc="Once the data is deleted it can't be undone. Are you sure? "
                  />
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
