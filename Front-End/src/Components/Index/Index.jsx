import React from "react";
import s from './index.module.css';



export default function Paginado({ servicesPerPage, allServices, index, currentPage}) {
    const pageNumber = [];
    
    function nextPrevButton (e){
        if(e.target.value === "prev" && currentPage > 1){
            index(currentPage-1)
        }else if(e.target.value === "next" && currentPage < pageNumber.length){
            index(currentPage+1)
        }
    }

    for (let i = 0; i < Math.ceil(allServices / servicesPerPage); i++) {
        pageNumber.push(i+1)
    }

    return (    
        <nav className={s.pagination}>
            <button className={s.button} value="prev" onClick={(e) => nextPrevButton(e)}>prev</button>
            <div className={s.itemContainer}>
                {pageNumber &&
                    pageNumber.map(number => (
                        <p className={s.item} key={number} value={number} 
                        onClick={() => index(number)}>{number}</p>                  
            ))}
            </div>
            <button className={s.button} value="next" onClick={(e) => nextPrevButton(e)}>next</button>
        </nav >
        
    )
}