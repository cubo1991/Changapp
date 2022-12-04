import React from "react";
// import s from '../Stylos/Paginado.module.css'

function nextPrevButton (){
    
}


export default function Paginado({ servicesPerPage, allServices, index }) {
    const pageNumber = [];


    for (let i = 0; i < Math.ceil(allServices / servicesPerPage); i++) {
        pageNumber.push(i+1)
    }

    return (    
        <nav >
            <button>prev</button>
            <ul >
                {pageNumber &&
                    pageNumber.map(number => (
                        <li key={number} >
                        <p onClick={() => index(number)}>{number}</p>
                        </li>
            ))}
            </ul>
            <button>next</button>
        </nav >
        
    )
}