import { ADD_TODO, DELETE_TODO, EDIT_STATE_TODO } from '../action/todoActions';

const initialState = {
  todoList: [
    {
      id: 1,
      text: '할일',
      state: false,
    },
    {
      id: 2,
      text: '할일',
      state: false,
    },
  ],
};

const todo = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, todoList: [...state.todoList, payload] };
    case EDIT_STATE_TODO:
      return {
        ...state,
        todoList: state.todoList?.map((element) => {
          return element.id === payload
            ? { ...element, state: !element.state }
            : element;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList?.filter((element) => element.id !== payload),
      };
    default:
      return state;
  }
};
export default todo;
