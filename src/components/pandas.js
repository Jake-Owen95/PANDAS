import React from 'react'
import Modal from './modal/Modal'

    const Pandas = ({ pandas }) => {
      return (
        <div>
          <center><h1>Panda List</h1></center>
          {pandas.map((pandas) => (
             
            <div class="card">
              <div class="card-body">
                  <h5 class="card-title">{pandas.name}</h5>
                  <img src={pandas.img_url}></img>
                  <>
                  <Modal />
                  </>
                  
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Pandas