import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchSuppliers, searchService } from "../../actions";
import styles from "../Searchbar/Searchbar.module.css";

function Searchbar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
 
  //console.log(input);
  const searchingType = useSelector( state => state.searchingType);

  const handleClick = () => {
    searchingType === 'services' ? dispatch(searchService(input)) : dispatch(searchSuppliers(input));
    setInput("");
   // navigate("/");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchingType === 'services' ? dispatch(searchService(input)) : dispatch(searchSuppliers(input));
      setInput("");
   //   navigate("/");
    }
  };

  return (
    <>
      <div>
          <button className={styles.btn}>
            <input
              type="text"
              placeholder="Buscar"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              tabIndex="0"
              className={styles.search_hover}
            ></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
              onClick={(e) => handleClick()}
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
      </div>
    </>
  );
}

export default Searchbar;
