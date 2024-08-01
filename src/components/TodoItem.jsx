import { Trash2 } from "lucide-react";
import { useState } from "react";

export function TodoItem({ todo, onDeleteTodo }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const handleClick = () => {
    setIsCompleted((prevState) => {
      const newState = !prevState;
      console.log("Button clicked. New state:", newState);
      return newState;
    });
  };

  return (
    <li key={todo.id} className="flex justify-between gap-4 py-2">
      <button
        onClick={handleClick}
        className={`bg-gray-50 p-5 flex-1 ${isCompleted ? "bg-green-50" : ""}`}
      >
        <span
          className={`text-lg font-medium ${isCompleted ? "line-through" : ""}`}
        >
          {todo.name}
        </span>
      </button>
      <button onClick={() => onDeleteTodo(todo.id)} className="bg-red-500 p-5">
        <Trash2 className="text-red-950" size={32} />
      </button>
    </li>
  );
}
