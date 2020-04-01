import reducer from './user'

describe('user reducer test', ()=>{

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
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
        })
      })
    it('should handle GET_USER', ()=>{
        expect(reducer({
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
        },{
            type : 'GET_USER',
        })).toEqual({
            user: {
                username : localStorage.getItem('username'),
                access_token : localStorage.getItem('access_token'),
                token_type : localStorage.getItem('token_type')
            },
            app :{
                resourse: {
                    dataUser: {},
                    dataRole: {},
                    dataAuth: {},
                },
                locale: 'vn'
            }
        })
    })
    it('should handle GET_LIST_USER', () => {
        expect(reducer({
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
        }},{
            type: 'GET_LIST_USER',
            dataUser: {
                name: 'Duy',
                name: 'Trung'
            }
        })).toEqual({
            user: {
                username : '',
                access_token : '',
                token_type : ''
            },
            app:{
                resourse: {
                    dataUser: {
                        name: 'Duy',
                        name: 'Trung'
                    },
                    dataRole: {},
                    dataAuth: {},
                },
                locale: 'vn'
            }
        })
    })
    it('should handle GET_LIST_ROLE', () => {
        expect(reducer({
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
        }},{
            type: 'GET_LIST_ROLE',
            dataRole: {
                id: 'system_admin'
            }
        })).toEqual({
            user: {
                username : '',
                access_token : '',
                token_type : ''
            },
            app:{
                resourse: {
                    dataUser: {},
                    dataRole: {
                        id: 'system_admin'
                    },
                    dataAuth: {},
                },
                locale: 'vn'
            }
        })
    })
    it('should handle GET_LIST_AUTH', () => {
        expect(reducer({
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
        }},{
            type: 'GET_LIST_AUTH',
            dataAuth: {
                uuid: 'system_admin'
            }
        })).toEqual({
            user: {
                username : '',
                access_token : '',
                token_type : ''
            },
            app:{
                resourse: {
                    dataUser: {},
                    dataRole: {},
                    dataAuth: {
                        uuid: 'system_admin'
                    },
                },
                locale: 'vn'
            }
        })
    })
})
