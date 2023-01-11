import { useContext } from 'react';
import userAction from './actions/userActions';
import UserContext from './contexts/UserContext';

function InnerApp() {
  const {state, dispatch} = useContext(UserContext)

  const setUser = () => {
    dispatch(userAction.SET_USER({username: "pchrisss", user_id: 69420}))
  }
  const removeUser = () => {
    dispatch(userAction.REMOVE_USER())
  }
  console.log(state)

  return (
    <div>
      <button onClick={setUser}>set</button>
      <button onClick={removeUser}>remove</button>
    </div>
  );
}

export default InnerApp;