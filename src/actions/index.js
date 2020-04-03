export const getUser = (username, access_token, token_type) => {
    return {
        type : "GET_USER",
        username,
        access_token,
        token_type
    }
}

//demo for saga
export const getListUerStart = action => {
    return {
        type: "GET_LIST_USER_START",
        action
    }
}

export const getListUerSuccess = dataUser => {
    return {
        type: "GET_LIST_USER_SUCCESS",
        dataUser
    }
}

//get list role for saga 
export const getListRoleStart = action => {
    return {
        type: "GET_LIST_ROLE_START",
        action
    }
}

export const getListRoleSuccess = dataRole => {
    return {
        type: "GET_LIST_ROLE_SUCCESS",
        dataRole
    }
}
//get list auth for saga
export const getListAuthStart = action => {
    return {
        type: "GET_LIST_AUTH_START",
        action
    }
}

export const getListAuthSuccess = dataAuth => {
    return {
        type: "GET_LIST_AUTH_SUCCESS",
        dataAuth
    }
}


///
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
