import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from "react-router-dom";


let Users = (props) => {

    let pegesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pegesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(page => {
                return <span className={props.currentPage === page && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(page); }}> {page} </span>
            })
            }
        </div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={ '/profile/' + user.id }>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id )}
                                onClick={ () => { props.unfollow( user.id ) }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id )} onClick={() => { 
                                props.follow(user.id) } }>Follow</button>}
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
}


export default Users;