import React, { useState } from 'react';
import "./modal.css";

export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    
    return(
        <>
        
        <button onClick={toggleModal} className="btn_modal" >
            Open
        </button>


        {modal && (
            <div className="modal">
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
                <h2>Hello Modal</h2>
                <p>kbfqfbqbfkjefbewf</p>
                <button className='close-modal' onClick={toggleModal}>CLOSE</button>
            </div>
        </div>       
        )}
         
        </>
    );
}