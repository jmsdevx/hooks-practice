import React from "react";
import TodoForm from "../todo/components/TodoForm";
import TodoList from "../todo/components/TodoList";
import useTodoState from "../todo/functions/useTodoState";
import Typography from "@material-ui/core/Typography";

const ToDo = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  const todoText = text => {
    const trimmed = text.trim();
    if (trimmed.length > 0) {
      addTodo([...todos, trimmed]);
    }
  };

  return (
    <div>
      <Typography component="h1" variant="h2">
        To Do List
      </Typography>
      <TodoForm saveTodo={todoText} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default ToDo;
