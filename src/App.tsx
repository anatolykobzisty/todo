import React from "react";
import { Layout } from "antd";
import "./App.less";
import { TodoForm } from "./features/todoForm";
import { TodoList } from "./features/todoList";

const { Content } = Layout;

function App() {
  return (
    <Layout className="container">
      <Content>
        <TodoForm />
        <TodoList />
      </Content>
    </Layout>
  );
}

export default App;
