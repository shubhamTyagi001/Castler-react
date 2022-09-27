import { FaSearch } from "react-icons/fa"
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css"
function Search() {
    const [input, setinput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  
  function validation(e){
    e.preventDefault()
  const validval=input;
 
  if(validval<=0 && validval!=="" ){
    alert("please enter value between 0 to 13")
  }
  else if(validval>12 && validval!==""){
     alert("please enter value between 0 to 13")
  }
  console.log(typeof(validval))
  }

  return (
    <form className='foemstyl' onSubmit={submitHandler}>
      <div className='inner'>
        <FaSearch className='svg'></FaSearch>
        <input className='input'
          type="number"
          value={input}  placeholder="Please enter user ID"
          onChange={(e) => {
            setinput(e.target.value);
           
          }}
           onKeyUp={validation}
        />
      </div>
    </form>
  )
}

export default Search