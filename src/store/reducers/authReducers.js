const initState = {
    authError: null
}

const authReducers = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR': 
        return{
            ...state,
            authError: 'login failed'
        }
        case 'LOGIN_SUCCESS':
            console.log('login valid');
            return{
             ...state,
             authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signeout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('success sign up ')
            return{
                ...state,
                authError: null
            }
        case "SIGNUP_ERROR" : 
            return{
                authError: action.err.message
            }    
        default: 
            return state    
    }
    
}

export default authReducers