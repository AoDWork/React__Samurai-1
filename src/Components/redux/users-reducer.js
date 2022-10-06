const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let InitialState = {
    usersData: [
        // { id: 1, photoUrl: 'https://images.archive-digger.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_225%2Cw_300%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A%2F%2Fi.imgur.com%2FhDNiJvY.png', 
        //     followed: false, fullName: "Dmitry", status: 'I am a boss', location: {city: 'Minsk' , country:'Belarus' } },
        // { id: 2, photoUrl: 'https://images.archive-digger.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_225%2Cw_300%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A%2F%2Fi.imgur.com%2FhDNiJvY.png', 
        //     followed: true, fullName: "Sasha", status:'I am a boss too', location: {city: 'Moskov', country:'Russia'  } },
        // { id: 3, photoUrl: 'https://images.archive-digger.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_225%2Cw_300%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A%2F%2Fi.imgur.com%2FhDNiJvY.png', 
        //     followed: false, fullName: "Vitya", status: 'I am a super boss',location: {city: 'Kyiv', country:'Ukraine' }  }
    ]
}

const usersReducer = (state = InitialState, action) => {
    
    switch(action.type) {
        case FOLLOW:
            return { 
                ...state, 
                usersData: state.usersData.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return { 
                ...state, 
                usersData: state.usersData.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return { ...state, usersData: [ ...state.usersData, ...action.users ]}

        default:
            return state;
    }
}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })



export default usersReducer;