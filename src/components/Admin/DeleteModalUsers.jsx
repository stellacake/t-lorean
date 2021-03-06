import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

const DeleteModalUsers = (props) => {
  const { className, userId } = props;
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  const handleDelete = () => {
    axios.delete(`https://api-airbnb-node.herokuapp.com/api/users/${userId}`, {
      headers: { Accept: '*/*' },
    });
    toggleNested();
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        x
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          Suppression d&apos;un utilisateur
        </ModalHeader>
        <ModalBody>
          Êtes-vous sûr de vouloir supprimer cet utilisateur ?
          <br />
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Utilisateur supprimé</ModalHeader>
            <ModalBody>L&apos;utilisateur a bien été supprimé.</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleAll}>
                OK
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Annuler
          </Button>{' '}
          <Button color="primary" onClick={handleDelete}>
            Confirmer
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

DeleteModalUsers.propTypes = {
  className: PropTypes.shape.isRequired,
  userId: PropTypes.number.isRequired,
};

export default DeleteModalUsers;
