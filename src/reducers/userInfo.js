const userInfo = (state = {},action)=>{
    // const access_token = localStorage.getItem('access_token');
    // const token_type =  localStorage.getItem('token_type');
    // const username=  localStorage.getItem('username'); 
switch(action.type){
    case 'GET_USER_INFO': 
        return action.userInfo;
    default:
        return state ;
}
}
export default userInfo;