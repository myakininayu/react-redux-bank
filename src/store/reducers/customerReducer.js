const defaultState = {
    customers: [],
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return { ...state};
        case "GET_CUSTOMER":
            return { ...state};
        default:
            return state;
    }
};