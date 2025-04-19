import React from 'react'
import bg from './bg.mp4'


const Main = () => {
    return(
        <div className="main">
      
             <video src={bg} autoPlay loop muted />
           
        </div>
    )
}

export default Main;
