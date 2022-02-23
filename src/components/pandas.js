import React from 'react';
import Modal from './modal/Modal';

import "./pandas.css";



    const Pandas = ({ pandas }) => {
      return (
        <div>
          <center><h1><u>Panda List</u></h1></center>
          
          {pandas.map((pandas) => (
           
            <div class="card">
              <div class="card-body">
                  <h2 class="panda">{pandas.name}</h2>
                  <img className="pandImg" src={pandas.img_url}></img>
                  <Modal/> 
                              
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Pandas