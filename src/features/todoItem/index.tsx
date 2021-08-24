import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { deleteTodo, updateTodo, toggleCompleteTodo } from "../todoList/todoListSlice";
import { Todo } from "../todoList/todoListSlice";
import { Checkbox, Input, Button, Typography } from "antd";

const { Text } = Typography;

export function TodoItem(todo: Todo) {
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(todo.text);

  const dispatch = useAppDispatch();

  const handleOnChange = () => {
    dispatch(toggleCompleteTodo({ id: todo.id }));
  };

  return (
    <div className="todo-item">
      <div className="todo-item-left">
        <Checkbox onChange={handleOnChange} />
        {editable ? (
          <Input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        ) : (
          <Text delete={todo.completed}>{todo.text}</Text>
        )}
      </div>
      <div className="todo-item-right">
        <Button
          className="btn-edit-update"
          type="primary"
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                text: text,
              })
            );
            if (editable) {
              setText(text);
            }
            setEditable(!editable);
          }}
        >
          {editable ? "обновить" : "редактировать"}
        </Button>
        <Button type="primary" onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
          удалить
        </Button>
      </div>
    </div>
  );
}
