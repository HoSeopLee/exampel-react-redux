import React from 'react';
import './TodoListTemplate.css';
import { Form, TodoItemList } from './';
const TodoListTemplate = () => {
  return (
    <main className="todo-list-template">
      <div className="title">오늘 할 일</div>
      <section className="form-wrapper">
        <Form />
      </section>
      <section className="todos-wrapper">
        <TodoItemList />
      </section>
    </main>
  );
};

export default TodoListTemplate;
