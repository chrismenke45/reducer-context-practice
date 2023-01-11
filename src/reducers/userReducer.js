const userReducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return { username: action.payload.username, user_id: action.payload.user_id }
      case "REMOVE_USER":
        return { username: "", user_id: "" }
      default:
        return state
    }
  }

  export default userReducer