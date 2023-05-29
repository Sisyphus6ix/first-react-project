import React from "react";

const Card = (athlete) => {
    return (
        <div id='info' className="dib br3 pa3 ma3 grow bw2 shadow-5"> 
            <img alt='LeBron James' src={athlete.image}></img>
            <div>
                <h2>{athlete.name}</h2>
                <p>{athlete.bio}</p>
            </div>
        </div>
    )
}

export default Card