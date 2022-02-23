import React, { useState } from "react";
import "./modal.css";
import Panda from './Panda';

export default function Modal() {
 
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        See Pandas details
      </button>
      {modal && (
        
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            
          
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}