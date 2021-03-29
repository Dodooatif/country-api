import React, {useState, } from "react"
import { Link } from "react-router-dom";


function Search() {
   const [value, setValue]= useState("")

    return (
        
       <form className="ui form"  style={{background:"green" , display:"flex" ,justifyContent:"center"}}>
           <input
            type="text"
            placeholder="Search Country"
            value={`${value}`}
            onChange={(e)=> setValue(e.target.value)}
            
            />
            <Link to ="/details">
            <button>SEARCH</button>
            </Link>
             
       </form>
       
    )
}

export default Search;
