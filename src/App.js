import { useEffect, useReducer } from 'react';
import InnerApp from './InnerApp';
import userReducer from './reducers/userReducer';
import UserContext from './contexts/UserContext';

function App() {
  const [state, dispatch] = useReducer(userReducer, { username: "", user_id: "" })

  // const setUser = () => {
  //   dispatch(userAction.SET_USER({username: "chrisss", user_id: 420}))
  // }
  // const removeUser = () => {
  //   dispatch(userAction.REMOVE_USER())
  // }


  useEffect(() => {
    console.log(state)
  })

  return (
    <div>
      <UserContext.Provider value={{state, dispatch}}>
        <InnerApp />
      </UserContext.Provider>

    </div>
  );
}

export default App;
