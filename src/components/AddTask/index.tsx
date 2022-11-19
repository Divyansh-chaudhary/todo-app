import React, { useState } from "react";
import PlusIcon from "../../icons/PlusIcon";

type Props = {
  addTodo: Function;
};

const AddTask = ({ addTodo }: Props) => {
  const [input, setInput] = useState<string>("");

  const addNewTodo = () => {
    if (input !== "") {
      addTodo(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addNewTodo();
    }
  };

  return (
    <div className="border-2 border-slate-700 rounded-2xl p-2 flex">
      <span
        onClick={addNewTodo}
        className="bg-red-300 rounded-xl p-1 w-7 h-7 flex items-center justify-center cursor-pointer"
      >
        <PlusIcon />
      </span>
      <input
        onKeyDown={handleKeyDown}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="min-w-0 flex-1 px-3 bg-transparent outline-none border-none text-gray-300"
        type="text"
        placeholder="Add a Task"
      />
    </div>
  );
};

export default AddTask;
