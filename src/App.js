import { useEffect, useReducer } from 'react';
import userAction from './actions/userActions';
import userReducer from './reducers/userReducer';

function App() {
  const [state, dispatch] = useReducer(userReducer, { username: "", user_id: "" })

  const setUser = () => {
    dispatch(userAction.SET_USER({username: "chrisss", user_id: 420}))
  }
  const removeUser = () => {
    dispatch(userAction.REMOVE_USER())
  }

  useEffect(() => {
    console.log(state)
  })
  return (
    <div>
      <button onClick={setUser}>set</button>
      <button onClick={removeUser}>remove</button>
    </div>
  );
}

export default App;
