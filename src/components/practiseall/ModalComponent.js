import React from 'react';

import { Button , Modal } from 'react-bootstrap';



function ModalComponent({showModal, handleClose, title, content}) {
  return (
    <div>

    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                {title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                {content}
        </Modal.Body>
        <Modal.Footer>
        <Button variant='secondary' onClick= {handleClose}>
                Close
            </Button>
        </Modal.Footer>            
       
    </Modal>
    </div>
  )
}

export default ModalComponent