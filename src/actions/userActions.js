const userAction = {
    SET_USER(user) {
        return {
            type: "SET_USER",
            payload: user
        }
    },
    REMOVE_USER() {
        return {
            type: "REMOVE_USER"
        }
    }
}
export default userAction