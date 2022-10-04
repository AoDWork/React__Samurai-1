import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC} from '../redux/users-reducer'


let mapDispatchToProps = (state) => {
    return {
        users: state.usersPage.usersData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)); },
        unfollow: (userId) => { dispatch(unfollowAC(userId)); },
        setUsers: (users) => { dispatch(setUsersAC(users)); }
    }
};


export default connect (mapStateToProps, mapDispatchToProps)(Users);