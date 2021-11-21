
import axios from 'axios';
import React,{useState, useEffect} from 'react';

    
const Player = () => {
  const [playerData,setPlayerData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/api/get").then((res)=>{
    setPlayerData(res.data)
    })
      .catch(err=>{
        console.log(err);
      })
  },[])

    return (
      <>
      {playerData.map((data,id)=>{
        return <div className="Player" key={id}>
          <span className="Username"> { data.name }  </span> 
          <span className="Crystals"> { data.balance }  </span> 
          <span className="DateModi"> {Object.keys(JSON.parse(data.items)).length}  </span>
        </div>
      })}
  
      </>

    )
};

export default Player;