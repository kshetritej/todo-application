import   AddTodo from "./AddTodo";
const Topbar = () => {
  return (
    <div className="flex border-b-2 justify-between p-2 ">
      <div>
        <h1 className="text-2xl font-bold"> Todo </h1>
      </div>

      <div>
        <AddTodo />
      </div>
    </div>
  );
};

export default Topbar;
