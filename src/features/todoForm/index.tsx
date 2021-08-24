import React from "react";
import { Form, Button, Input } from "antd";
import { addTodo } from "../todoList/todoListSlice";

import { useAppDispatch } from "../../app/hooks";

export const TodoForm = () => {
  const [form] = Form.useForm();
  const inputRef = React.useRef<any>(null);

  const dispatch = useAppDispatch();

  const onFinish = (values: { text: string }) => {
    dispatch(addTodo({ text: values.text }));
    form.resetFields();
    inputRef.current!.focus({
      cursor: "start",
    });
  };

  return (
    <Form className="todo-input-box" form={form} onFinish={onFinish}>
      <Form.Item name={"text"}>
        <Input type="text" ref={inputRef} placeholder="напишите задачу" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        добавить задачу
      </Button>
    </Form>
  );
};
