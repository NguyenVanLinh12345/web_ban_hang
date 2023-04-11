<<<<<<< HEAD

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
=======

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
>>>>>>> 49645612789691bcb586d9a3a0b43e0a2cc3aed6
export default reducer;