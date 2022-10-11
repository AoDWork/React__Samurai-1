import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

const srcApiSamurai = 'https://social-network.samuraijs.com/api/1.0/users';
const srcApiJson = 'https://jsonplaceholder.typicode.com/users'

axios.get(srcApiSamurai).then( responce => { console.log(responce.data); } )


class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get(srcApiSamurai)
            .then( responce => { 
                this.props.setUsers(responce.data.items); 
            });
        
    }

    render() {
        return(
            <div>
                {
                    this.props.users.map(user => <div key = {user.id}>
                        <span>
                            <div><img src={user.photos.small !==null ? user.photos.small : userPhoto } className={styles.userPhoto} /></div>
                            <div>
                                {user.followed 
                                    ? <button onClick = { ()=> {this.props.unfollow(user.id)} }>Unfollow</button> 
                                    : <button onClick = { ()=> {this.props.follow(user.id)} }>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
        )
    }
}


export default Users;