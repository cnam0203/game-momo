const initialState = {
    isSignIn: false,
    userInfo: null,
    room: null,
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
        case 'CREATE_NEW_ROOM':
            console.log("reducer", action.payload)
            return Object.assign({}, state, {
                room: action.payload
        })
        default:
            return state
    }
}

export default reducers