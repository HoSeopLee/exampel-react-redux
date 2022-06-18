import './App.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import TodoList from './pages/TodoList';
function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
