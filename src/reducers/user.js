const access_token = localStorage.getItem('access_token');
const token_type =  localStorage.getItem('token_type');
const username =  localStorage.getItem('username');
var redux = {
        user : {
            username : username,
            access_token : access_token,
            token_type : token_type
        },
        app :{
            resource: {
                dataUser: [],
                dataRole: [],
                dataAuth: [],
            },
            locale: 'vn'
        }
        
}
const user = (state = redux,action)=>{
         
    switch(action.type){
        case 'GET_LIST_USER_START':
                {
                    return state;
                }
        case 'GET_LIST_USER_SUCCESS':
            {
                state.app.resource.dataUser = action.dataUser;
                return state;
            }
        case 'GET_USER':
            {
                state.user.username = localStorage.getItem('username');
                state.user.access_token = localStorage.getItem('access_token');
                state.user.token_type = localStorage.getItem('token_type');
                return state
            } 
            
        case 'GET_LIST_USER':
            {
                state.app.resource.dataUser = action.dataUser;
                return state;
            }
        case 'GET_LIST_ROLE':
            {
                state.app.resource.dataRole = action.dataRole;
                return state;
            }
        case 'GET_LIST_AUTH':
            {
                state.app.resource.dataAuth = action.dataAuth;
                return state;
            }
        default: return state;
    }
}
export default user;