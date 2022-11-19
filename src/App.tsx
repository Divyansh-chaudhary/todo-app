import React, { useCallback, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState<Task[]>([]);

  const addTodo = useCallback(
    (text: string) => {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(36) + Math.random().toString(36).substr(2),
          text,
          completed: false,
        },
      ]);
    },
    [todos]
  );

  const setCompleted = useCallback(
    (id: TaskID) => {
      setTodos(
        todos.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      );
    },
    [todos]
  );

  const deleteTask = (id: TaskID) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen ">
      <section className="p-5 max-w-4xl mx-auto  ">
        <AddTask addTodo={addTodo} />
        <Todos
          setCompleted={setCompleted}
          todos={todos}
          deleteTask={deleteTask}
        />
      </section>
    </main>
  );
};

export default App;
