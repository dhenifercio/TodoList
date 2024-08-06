import { Trash2 } from "lucide-react";
import { useState } from "react";

export function TodoItem({ todo, onDeleteTodo, onClickTodo }) {

  return (
    <li key={todo.id} className="flex justify-between gap-4 py-2">
      <button
        onClick={ () => onClickTodo(todo.id)}
        className={`bg-gray-50 p-5 flex-1 ${todo.concluida ? "bg-green-50" : ""}`}
      >
        <span
          className={`text-lg font-medium ${todo.concluida ? "line-through" : ""}`}
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
