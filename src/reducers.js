const initialState = {
    isSignIn: false,
    userInfo: null,
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN': 
            return Object.assign({}, state, {
                isSignIn: true,
                userInfo: action.payload
            })
        case 'SIGN_OUT':
            return Object.assign({}, state, {
                isSignIn: false,
                userInfo: null
            })
        default:
            return state
    }
}

export default reducers