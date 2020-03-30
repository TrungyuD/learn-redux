export const getUser = (username, access_token, token_type) => {
    return {
        type : "GET_USER",
        username,
        access_token,
        token_type
    }
}
export const getListUer = dataUser => {
    return {
        type: "GET_LIST_USER",
        dataUser
    }
}
export const getListRole = dataRole => {
    return {
        type: "GET_LIST_ROLE",
        dataRole
    }
}
export const getListAuth = dataAuth => {
    return {
        type: "GET_LIST_AUTH",
        dataAuth
    }
}
export const getUserInfo = userInfo => {
    return {
        type: "GET_USER_INFO",
        userInfo
    }
}
