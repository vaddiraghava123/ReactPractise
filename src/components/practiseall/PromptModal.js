// PromptModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function PromptModal({ showModal, handleClose, handleOk, title, message }) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleOk}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PromptModal;
