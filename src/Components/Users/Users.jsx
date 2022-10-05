import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';


let Users = (props) => {

    if (props.setUsers.length === 0 ) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
              .then( responce => { props.setUsers(responce.data.items); } );

        // props.setUsers( //users:
        //     [   { id: 1, photoUrl: 'https://images.archive-digger.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_225%2Cw_300%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A%2F%2Fi.imgur.com%2FhDNiJvY.png', 
        //             followed: false, fullName: "Dmitry", status: 'I am a boss', location: {city: 'Minsk' , country:'Belarus' } },
        //         { id: 2, photoUrl: 'https://images.archive-digger.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_225%2Cw_300%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A%2F%2Fi.imgur.com%2FhDNiJvY.png', 
        //             followed: true, fullName: "Sasha", status:'I am a boss too', location: {city: 'Moskov', country:'Russia'  } },
        //         { id: 3, photoUrl: 'https://images.archive-digger.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_225%2Cw_300%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A%2F%2Fi.imgur.com%2FhDNiJvY.png', 
        //             followed: false, fullName: "Vitya", status: 'I am a super boss',location: {city: 'Kyiv', country:'Ukraine' }  }
        //     ]
        // )
    };

    return(
        <div>
            {
                props.users.map(user => <div key = {user.id}>
                    <span>
                        <div><img src={user.photoUrl} className={styles.userPhoto} /></div>
                        <div>
                            {user.followed 
                                ? <button onClick = { ()=> {props.unfollow(user.id)} }>Unfollow</button> 
                                : <button onClick = { ()=> {props.follow(user.id)} }>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;