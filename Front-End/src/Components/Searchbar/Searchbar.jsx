import React ,{ useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Searchbar() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate();
    console.log(input)

    const handleClick = () => {
        // dispatch(getsuppliers(input));
        setInput("");
        navigate("/");
      };

      const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            // dispatch(getsuppliers(input));
            setInput("");
            navigate("/");;
        }
      };

    return (
        <>
          <div >
        <div >
          <input
            type="text"
            placeholder="Buscar"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          ></input>
          <button onClick={(e) => handleClick()}>
            Buscar
          </button>
        </div>
      </div>  
        </>
    );
}

export default Searchbar;