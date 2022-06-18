import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoItemList = (props) => {
  const { todoList } = useSelector((state) => state.rootReducer.todo);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'none',
      }}
    >
      {todoList?.length !== 0 &&
        todoList.map((element, id) => {
          return (
            <TodoItem
              key={element.id}
              id={element.id}
              text={element.text}
              checked={element.state}
            />
          );
        })}
    </div>
  );
};

export default TodoItemList;
TodoItemList.defaultProps = {
  todoList: [],
};
