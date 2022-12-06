import React from "react";
// import s from '../Stylos/Paginado.module.css'



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
        <nav >
            <button value="prev" onClick={(e) => nextPrevButton(e)}>prev</button>
            <ul >
                {pageNumber &&
                    pageNumber.map(number => (
                        <li key={number} value={number}>
                        <p onClick={() => index(number)}>{number}</p>
                        </li>
            ))}
            </ul>
            <button value="next" onClick={(e) => nextPrevButton(e)}>next</button>
        </nav >
        
    )
}