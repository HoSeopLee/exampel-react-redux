import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
//미들웨어 설정은 해당 예제파일에서 구현안해도 되므로 제외해도됨
//redux에  createStore 가 더이상 지원하지 않는다고하여 reduxjs/toolkit에 있는 configureStore사용
const store = configureStore({
  reducer: {
    rootReducer,
  },
});
export default store;
