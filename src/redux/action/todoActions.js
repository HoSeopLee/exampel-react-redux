export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_STATE_TODO = 'EDIT_STATE_TODO';
//등록
export const TodoAdd = (data) => async (dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: data,
  });
};

//수정
export const TodoStateEdit = (data) => async (dispatch) => {
  dispatch({
    type: EDIT_STATE_TODO,
    payload: data,
  });
};

//삭제
export const TodoDelete = (data) => async (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: data,
  });
};
