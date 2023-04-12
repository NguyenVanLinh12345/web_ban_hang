const initState = {
    checkLogin: false
}

function reducer(state, action) {
    let newstate;
    switch (action.type) {
        case "login":
            newstate = { ...state, checkLogin: true }
            break;

        default:
            throw console.error("error action");
    }
    return newstate;
}

export { initState };
export default reducer;