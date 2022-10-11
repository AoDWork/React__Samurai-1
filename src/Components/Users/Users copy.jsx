import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

const srcApiSamurai = 'https://social-network.samuraijs.com/api/1.0/users';
const srcApiJson = 'https://jsonplaceholder.typicode.com/users'

axios.get(srcApiSamurai).then( responce => { console.log(responce.data); } )


let Users = (props) => {
    
    let getUsers = () => {
        if (props.users.length === 0 ) {
            axios.get(srcApiSamurai)
                .then( responce => { 
                    props.setUsers(responce.data.items); 
                });
        }
    };

    // console.log(props.users)

    return(
        <div>
            <button onClick = {getUsers} >Get Users</button>
            {
                props.users.map(user => <div key = {user.id}>
                    <span>
                        <div><img src={user.photos.small !==null ? user.photos.small : userPhoto } className={styles.userPhoto} /></div>
                        <div>
                            {user.followed 
                                ? <button onClick = { ()=> {props.unfollow(user.id)} }>Unfollow</button> 
                                : <button onClick = { ()=> {props.follow(user.id)} }>Follow</button>}
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

export default Users;