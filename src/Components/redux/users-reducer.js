const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let InitialState = {
    usersData: [
        { id: 1, followed: false, fullName: "Dmitry", status: 'I am a boss', location: {city: 'Minsk' , country:'Belarus' } },
        { id: 2, followed: true, fullName: "Sasha", status:'I am a boss too', location: {city: 'Moskov', country:'Russia'  } },
        { id: 3, followed: false, fullName: "Vitya", status: 'I am a super boss',location: {city: 'Kyiv', country:'Ukraine' }  }
    ]
}

const usersReducer = (state = InitialState, action) => {
    
    switch(action.type) {
        case FOLLOW:
            return { 
                ...state, 
                users: state.usersData.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return { 
                ...state, 
                users: state.usersData.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [ ...state.usersData, ...action.users ]
            }

        default:
            return state;
    }
}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })



export default usersReducer;