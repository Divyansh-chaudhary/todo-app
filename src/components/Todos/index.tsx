import React, { useCallback, useMemo } from "react";
import Todo from "../Todo";

type Props = {
  todos: Task[];
  setCompleted: TaskCompleteFunc;
  deleteTask: TaskDelete;
};

const Todos = ({ todos, setCompleted, deleteTask }: Props) => {
  const completedTasks = useMemo(
    () => todos.filter((item: Task) => item.completed),
    [todos]
  );
  const pendingTasks = useMemo(
    () => todos.filter((item: Task) => !item.completed),
    [todos]
  );

  const getTitle = useCallback((tasks: Task[]) => {
    return (
      tasks.length > 0 && (
        <p className="text-gray-200 my-3 text-sm">
          {tasks[0].completed ? "Completed" : "Pending"} Tasks -{" "}
          {tasks.length < 10 ? `0${tasks.length}` : tasks.length}
        </p>
      )
    );
  }, []);

  const getList = useCallback(
    (tasks: Task[]) => {
      return tasks.map((item: Task) => (
        <Todo
          key={item.id}
          text={item.text}
          completed={item.completed}
          id={item.id}
          setCompleted={setCompleted}
          deleteTask={deleteTask}
        />
      ));
    },
    [deleteTask, setCompleted]
  );

  return (
    <article className="py-4">
      <div className="flex gap-3 flex-col">
        {getTitle(pendingTasks)}
        {getList(pendingTasks)}
        {getTitle(completedTasks)}
        {getList(completedTasks)}
      </div>
    </article>
  );
};

export default Todos;
