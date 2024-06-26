import { useState } from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <main className="lg:flex-col flex flex-col-reverse gap-4 min-h-screen max-w-5xl mx-auto p-4">
        <section className="">
          <Input todos={todos} setTodos={setTodos} />
        </section>
        <section className="flex-1">
          <Todos todos={todos} setTodos={setTodos} />
        </section>
      </main>
    </>
  );
}

export default App;
