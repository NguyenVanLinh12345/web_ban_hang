const initState = {
    anhDaiDien: "",
    ten: "",
    diaChi: "",
}

const reducer = (state, action) => {
    switch (action.type) {
        case "all":
            const newState = action.payload
            return {
                ...state,
                anhDaiDien: newState.anhDaiDien,
                ten: newState.ten,
                diaChi: newState.diaChi
            }
        case "anhDaiDien":
            return {
                ...state,
                anhDaiDien: action.payload
            }
        case "ten":
            return {
                ...state,
                ten: action.payload
            }
        case "diachi":
            return {
                ...state,
                diaChi: action.payload
            }
        default:
            console.error("userInfo - reducer");
    }
};

export { initState };
export default reducer;