import { useState } from "react";

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: index => {
      const newTodos = todos.filter((_, i) => index !== i);
      setTodos(newTodos);
    }
  };
};
