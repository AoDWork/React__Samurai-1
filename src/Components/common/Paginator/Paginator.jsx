import React from 'react';
import styles from './Paginator.module.css';


let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={style.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>{"<- PREVIOS"}</button>}

        {pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(page => {
             // return <span className={currentPage === page && styles.selectedPage}
                return <span className={ cn({
                    [styles.selectedPage]: currentPage === page
                }, styles.pageNumber) }
                    onClick={(e) => { onPageChanged(page); }}  key={page} >{page}</span>
            })}

        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>{"NEXT ->"}</button>}
    </div>
}


export default Paginator;