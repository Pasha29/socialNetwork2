import React from 'react';
import css from './Paginator.module.css';
import { useState } from 'react';

const Paginator = (props) => {

    let pages = [];
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionCount = (portionNumber - 1) * props.portionSize + 1; //1
    let rightPortionCount = props.portionSize * portionNumber; //10

    return (
        <div className={css.paginationBlock}>
            {portionNumber > 1 ? <button className={css.paginationBtn} onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button> : '' }

            {pages.filter(pages => pages >= leftPortionCount && pages <= rightPortionCount)
                .map(item => {
                    return (
                        <p key={item} className={item === props.currentPage ? css.selected : ''}
                            onClick={() => { props.getNewUsers(item) }}>{item}</p>
                    )
                }
                )}
            { portionNumber < portionCount ? <button className={css.paginationBtn} onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button> : '' }
        </div>
    );
}

export default Paginator;
