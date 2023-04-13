import React from 'react';
import styles from './Paginator.module.css';


let Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

    let pegesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pegesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map( page => {
                return <span className={currentPage === page && styles.selectedPage}
                    onClick={(e) => { onPageChanged(page); }}> {page} </span> } )
            }
        </div>
    </div>
}


export default Paginator;