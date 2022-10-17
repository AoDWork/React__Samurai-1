import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

// const srcApiSamurai = 'https://social-network.samuraijs.com/api/1.0/users';
// const srcApiJson = 'https://jsonplaceholder.typicode.com/users'

// axios.get(srcApiSamurai).then( responce => { console.log(responce.data); } )


class Users extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize}`)
            .then( responce => { 
                this.props.setUsers(responce.data.items);
                this.props.setTotalUsersCount(responce.data.totalCount); 
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${ this.props.pageSize}`)
            .then( responce => { 
                this.props.setUsers(responce.data.items); 
            });
    }

    render() {
        let pegesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pegesCount; i++) {
            pages.push(i);
        }

        return(
            <div>
                <div>
                    { pages.map( page => {
                        return <span className={this.props.currentPage === page && styles.Selectedpage}
                        onClick={(e) => { this.onPageChanged(page); } }>{page}</span> }) 
                    }
                </div>
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