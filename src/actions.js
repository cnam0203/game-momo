export const onSignIn = (user) => {
    console.log(user)
    return {
        type: 'SIGN_IN',
        payload: user
    }
}

export const onSignOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}