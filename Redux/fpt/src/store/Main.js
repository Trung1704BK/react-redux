import { actions } from '.';
import { useStore } from './hooks';

function Main() {
  const [state, dispatch] = useStore();

  const { todos, todoInput } = state;
  console.log('check', todoInput);
  //
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
  };
  //
  console.log(todos);
  return (
    <div className='container'>
      <h1>Home</h1>
      <input
        value={todoInput}
        placeholder='Enter todo...'
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {
        todos.map((todo,index)=>(
          <li key={index}>{todo}</li>
        ))
      }
    </div>
  );
}

export default Main;
