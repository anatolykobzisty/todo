import { useAppSelector } from "../../app/hooks";
import { TodoItem } from "../todoItem";

import { List } from "antd";

export const TodoList = () => {
  const todoList = useAppSelector((state) => state.todoList.todoList);

  return (
    <List
      className="todo-list-box"
      locale={{
        emptyText: "Делать нечего :(",
      }}
      dataSource={todoList}
      renderItem={(todo) => <TodoItem key={todo.id} {...todo} />}
    />
  );
};
