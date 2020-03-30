// const access_token = localStorage.getItem('access_token');
// const token_type =  localStorage.getItem('token_type');
// const username=  localStorage.getItem('username');
var redux = {
        user : {
            username :'',
            access_token : '',
            token_type : ''
        },
        app :{
            resourse: {
                dataUser: {},
                dataRole: {},
                dataAuth: {},
            },
            locale: 'vn'
        }
        
}
const user = (state = redux,action)=>{
         
    switch(action.type){
        case 'GET_USER':
            {
                state.user.username = localStorage.getItem('username');
                state.user.access_token = localStorage.getItem('access_token');
                state.user.token_type = localStorage.getItem('token_type');
                return state
            } 
            
        case 'GET_LIST_USER':
            {
                state.app.resourse.dataUser = action.dataUser;
                return state;
            }
        case 'GET_LIST_ROLE':
            {
                state.app.resourse.dataRole = action.dataRole;
                return state;
            }
        case 'GET_LIST_AUTH':
            {
                state.app.resourse.dataAuth = action.dataAuth;
                return state;
            }
        default: return state;
    }
}
export default user;