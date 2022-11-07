import React from "react";
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../redux/profile-reducer';
import { useParams } from 'react-router-dom'; // import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {compose} from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId); 
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} 
                                        status={this.props.status} 
                                        updateUserStatus={this.props.updateUserStatus}/>
    }
}

let mapStateToProps = (state) => ({ profile: state.profilePage.userProfile,
                                    status: state.profilePage.status });

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// //todo  let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent); - заменить
// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);

export default compose(
                    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
                    //withRouter,
                    // withAuthRedirect
                )(ProfileContainer);