import React from 'react';
import { useDispatch } from 'react-redux';
import './TodoItem.css';
import { TodoDelete, TodoStateEdit } from '../../redux/action/todoActions';
const TodoItem = ({ text, checked, id }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(TodoDelete(id));
  };

  const handleEditState = () => {
    dispatch(TodoStateEdit(id));
  };

  return (
    <div
      className="todo-item"
      onClick={() => {
        handleEditState(id);
      }}
    >
      <div
        className="remove"
        onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          handleRemove(id);
        }}
      >
        &times;
      </div>
      <div className={`todo-text ${checked && 'checked'}`}>
        <div>{text}</div>
      </div>
      {checked && <div className="check-mark">✓</div>}
    </div>
  );
};

export default React.memo(TodoItem);
