import { authAPI } from "../../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return { 
                ...state, 
                ...action.data,
                isAuth: true
            }
        
        default:
            return state;
    }
}


export const setAuthUserData = (userId, login, email) => ({ type: SET_AUTH_USER_DATA, data:{ userId, login, email}  })


export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(responce => {
        if(!responce.data.resultCode === 0) {
            let { id, login, email} = responce.data;
            dispatch( setAuthUserData( id, login, email ) );
        }
    });
}



export default authReducer;