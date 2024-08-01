import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { TodoItem } from "./components/TodoItem";
import api from "./services/api";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos()
  }, []);

  const getTodos = async () => {
    try{
      const response = await api.get("tarefas")
      setTodos(response.data)
    }catch (error) {
      console.log(error)
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      await api.delete(`tarefas/${id}`);
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddTodo = async (name) => {
    try {
      await api.post("tarefas", { name, concluida: false });
      await getTodos()
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col min-h-screen w-screen bg-gray-100">
      <div className="flex-grow w-[485px] mx-auto px-4">
        <Header />
        <ul className="max-h-[465px] overflow-y-auto px-4">
          {todos.map((todo) => {
            return (
              <TodoItem
                onDeleteTodo={handleDeleteTodo}
                todo={todo}
                key={todo.id}
              />
            );
          })}
        </ul>
      </div>
      <Footer onNewTodo={handleAddTodo} />
    </div>
  );
}

export default App;
