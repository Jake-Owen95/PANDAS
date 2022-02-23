import React from 'react'
    
    const Panda = ({ panda }) => {
      
      return (
        <>
        <div>
          <center><h1>Panda List</h1></center>
          {panda.map((panda) => (
             
            <div class="card">
              <div class="card-body">
                  <h2 class="card-title">{panda.name}</h2>
                  <img src={panda.img_url}></img>
                  <h3>{panda.species}</h3>
                  <h4>{panda.favourite_food}</h4>
                  <h5>{panda.favourite_activities}</h5>
              </div>
            </div>
          ))}
        </div>
        </>
      )
    };

    export default Panda