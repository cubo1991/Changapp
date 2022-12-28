import React from "react";
import s from './index.module.css';



export default function Paginado({ servicesPerPage, allServices, index, currentPage }) {
    const pageNumber = [];

    function nextPrevButton(e) {
        if (e.target.value === "prev" && currentPage > 1) {
            index(currentPage - 1)
        } else if (e.target.value === "next" && currentPage < pageNumber.length) {
            index(currentPage + 1)
        }
    }

    for (let i = 0; i < Math.ceil(allServices / servicesPerPage); i++) {
        pageNumber.push(i + 1)
    }

    return (
        <div>
            <div className={s.pagination}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <button className={`page-link ${s.buttons}`} onClick={(e) => nextPrevButton(e)} value="prev">Anterior</button>
                        {pageNumber &&
                            pageNumber.map(number => (
                                <li className="page-item" ><p className={ currentPage === number ? `page-link ${s.activePage}` : `page-link ${s.focusPage}`} key={number} value={number}
                                    onClick={() => index(number)}> {number}</p></li>
                                )
                            )}
                            {/* <li className="page-item" ><p className="page-link" key={number} value={number}
                                    onClick={() => index(number)}> {number}</p></li> */}
                        <button className={`page-link ${s.buttons}`} onClick={(e) => nextPrevButton(e)} value="next">Siguiente</button>
                    </ul>
                </nav >
            </div>
        </div>

    )
}