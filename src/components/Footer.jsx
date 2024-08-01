import { SendHorizontal } from "lucide-react";
import { useState } from "react";

export function Footer({ onNewTodo }) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <footer className=" border-t mb-6 border-gray-300 flex justify-between gap-4 py-4  w-[485px] mx-auto px-4">
      <input
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        className="bg-gray-50 p-6 flex-1"
        placeholder="Nova tarefa"
      />
      <button onClick={ () => {
        onNewTodo(newTodo)
        setNewTodo("")
      }} className="bg-green-200 p-5">
        <SendHorizontal className="text-green-800" size={32} />
      </button>
    </footer>
  );
}
