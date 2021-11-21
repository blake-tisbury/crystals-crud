import { useState } from "react";
import axios from 'axios'


function SearchName(searchTerm){
    axios.get(`http://localhost:3001/api/getSearchName/${searchTerm}`).then((res)=>{
    for (var i = 0; i < res.data.length; i++){
        console.log(`Username: ${res.data[i].name} Crystals: ${res.data[i].balance} Purchases: ${Object.keys(JSON.parse(res.data[i].items)).length}`);
    }
    })
}


const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")
    
    return (
        <div className="Search">
   
          <input className = "InputField" type="text" placeholder="Enter Username: (Only works in console for now)" onChange={e => {setSearchTerm(e.target.value)}}/>
          <span className="SearchButton" onClick={searchTerm === "" ? null : SearchName(searchTerm)}>
                Search
            </span>

    </div>
    )
};

export default Search;