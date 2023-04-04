import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers } from '../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/preloader/Preloader'
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {compose} from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersData } from '../redux/users-selectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersData(state) ,
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state) ,
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};


export default compose (
                connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers })
                )(UsersContainer);



// let mapStateToProps = (state) => {       //! закоментировано в 81 для рефаторинга в селекторы
//     return {
//         users: state.usersPage.usersData,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// };



// let mapDispatchToProps = (dispatch) => {     //! закоментировано не мопню когда ))
//     return {
//         follow: (userId) => { dispatch(followAC(userId)); },
//         unfollow: (userId) => { dispatch(unfollowAC(userId)); },
//         setUsers: (users) => { dispatch(setUsersAC(users)); },
//         setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)); },
//         setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountAC(totalCount)); },
//         toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingAC(isFetching)); }
//     }
// };

// export default connect(mapStateToProps,
//     { follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers })
//     (UsersContainer);