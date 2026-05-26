import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        eleifend quam id congue. Vivamus ultricies leo non dolor sollicitudin
        elementum. Aenean at porttitor nisi, et bibendum erat. Nam placerat, leo
        vitae mollis porttitor, lacus erat posuere sem, eu sollicitudin velit
        orci et felis. Aliquam condimentum vestibulum nibh at blandit. Donec
        egestas risus iaculis blandit eleifend. Nullam ut lorem tellus. Praesent
        ut orci luctus, cursus augue sit amet, varius augue. Nulla facilisi.
        Etiam ante diam, varius id molestie at, dictum non enim. Curabitur
        imperdiet, quam ut rhoncus faucibus, nisl nunc fringilla diam, dapibus
        vulputate mi ante vitae enim. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Vivamus ac orci accumsan,
        varius augue quis, vulputate dui. Fusce scelerisque ipsum ut posuere
        faucibus. Maecenas sodales metus tellus. Vivamus fringilla lorem at
        magna facilisis, id auctor magna lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        eleifend quam id congue. Vivamus ultricies leo non dolor sollicitudin
        elementum. Aenean at porttitor nisi, et bibendum erat. Nam placerat, leo
        vitae mollis porttitor, lacus erat posuere sem, eu sollicitudin velit
        orci et felis. Aliquam condimentum vestibulum nibh at blandit. Donec
        egestas risus iaculis blandit eleifend. Nullam ut lorem tellus. Praesent
        ut orci luctus, cursus augue sit amet, varius augue. Nulla facilisi.
        Etiam ante diam, varius id molestie at, dictum non enim. Curabitur
        imperdiet, quam ut rhoncus faucibus, nisl nunc fringilla diam, dapibus
        vulputate mi ante vitae enim. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Vivamus ac orci accumsan,
        varius augue quis, vulputate dui. Fusce scelerisque ipsum ut posuere
        faucibus. Maecenas sodales metus tellus. Vivamus fringilla lorem at
        magna facilisis, id auctor magna lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        eleifend quam id congue. Vivamus ultricies leo non dolor sollicitudin
        elementum. Aenean at porttitor nisi, et bibendum erat. Nam placerat, leo
        vitae mollis porttitor, lacus erat posuere sem, eu sollicitudin velit
        orci et felis. Aliquam condimentum vestibulum nibh at blandit. Donec
        egestas risus iaculis blandit eleifend. Nullam ut lorem tellus. Praesent
        ut orci luctus, cursus augue sit amet, varius augue. Nulla facilisi.
        Etiam ante diam, varius id molestie at, dictum non enim. Curabitur
        imperdiet, quam ut rhoncus faucibus, nisl nunc fringilla diam, dapibus
        vulputate mi ante vitae enim. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Vivamus ac orci accumsan,
        varius augue quis, vulputate dui. Fusce scelerisque ipsum ut posuere
        faucibus. Maecenas sodales metus tellus. Vivamus fringilla lorem at
        magna facilisis, id auctor magna lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        eleifend quam id congue. Vivamus ultricies leo non dolor sollicitudin
        elementum. Aenean at porttitor nisi, et bibendum erat. Nam placerat, leo
        vitae mollis porttitor, lacus erat posuere sem, eu sollicitudin velit
        orci et felis. Aliquam condimentum vestibulum nibh at blandit. Donec
        egestas risus iaculis blandit eleifend. Nullam ut lorem tellus. Praesent
        ut orci luctus, cursus augue sit amet, varius augue. Nulla facilisi.
        Etiam ante diam, varius id molestie at, dictum non enim. Curabitur
        imperdiet, quam ut rhoncus faucibus, nisl nunc fringilla diam, dapibus
        vulputate mi ante vitae enim. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Vivamus ac orci accumsan,
        varius augue quis, vulputate dui. Fusce scelerisque ipsum ut posuere
        faucibus. Maecenas sodales metus tellus. Vivamus fringilla lorem at
        magna facilisis, id auctor magna lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        eleifend quam id congue. Vivamus ultricies leo non dolor sollicitudin
        elementum. Aenean at porttitor nisi, et bibendum erat. Nam placerat, leo
        vitae mollis porttitor, lacus erat posuere sem, eu sollicitudin velit
        orci et felis. Aliquam condimentum vestibulum nibh at blandit. Donec
        egestas risus iaculis blandit eleifend. Nullam ut lorem tellus. Praesent
        ut orci luctus, cursus augue sit amet, varius augue. Nulla facilisi.
        Etiam ante diam, varius id molestie at, dictum non enim. Curabitur
        imperdiet, quam ut rhoncus faucibus, nisl nunc fringilla diam, dapibus
        vulputate mi ante vitae enim. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Vivamus ac orci accumsan,
        varius augue quis, vulputate dui. Fusce scelerisque ipsum ut posuere
        faucibus. Maecenas sodales metus tellus. Vivamus fringilla lorem at
        magna facilisis, id auctor magna lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        eleifend quam id congue. Vivamus ultricies leo non dolor sollicitudin
        elementum. Aenean at porttitor nisi, et bibendum erat. Nam placerat, leo
        vitae mollis porttitor, lacus erat posuere sem, eu sollicitudin velit
        orci et felis. Aliquam condimentum vestibulum nibh at blandit. Donec
        egestas risus iaculis blandit eleifend. Nullam ut lorem tellus. Praesent
        ut orci luctus, cursus augue sit amet, varius augue. Nulla facilisi.
        Etiam ante diam, varius id molestie at, dictum non enim. Curabitur
        imperdiet, quam ut rhoncus faucibus, nisl nunc fringilla diam, dapibus
        vulputate mi ante vitae enim. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Vivamus ac orci accumsan,
        varius augue quis, vulputate dui. Fusce scelerisque ipsum ut posuere
        faucibus. Maecenas sodales metus tellus. Vivamus fringilla lorem at
        magna facilisis, id auctor magna lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        eleifend quam id congue. Vivamus ultricies leo non dolor sollicitudin
        elementum. Aenean at porttitor nisi, et bibendum erat. Nam placerat, leo
        vitae mollis porttitor, lacus erat posuere sem, eu sollicitudin velit
        orci et felis. Aliquam condimentum vestibulum nibh at blandit. Donec
        egestas risus iaculis blandit eleifend. Nullam ut lorem tellus. Praesent
        ut orci luctus, cursus augue sit amet, varius augue. Nulla facilisi.
        Etiam ante diam, varius id molestie at, dictum non enim. Curabitur
        imperdiet, quam ut rhoncus faucibus, nisl nunc fringilla diam, dapibus
        vulputate mi ante vitae enim. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Vivamus ac orci accumsan,
        varius augue quis, vulputate dui. Fusce scelerisque ipsum ut posuere
        faucibus. Maecenas sodales metus tellus. Vivamus fringilla lorem at
        magna facilisis, id auctor magna lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        eleifend quam id congue. Vivamus ultricies leo non dolor sollicitudin
        elementum. Aenean at porttitor nisi, et bibendum erat. Nam placerat, leo
        vitae mollis porttitor, lacus erat posuere sem, eu sollicitudin velit
        orci et felis. Aliquam condimentum vestibulum nibh at blandit. Donec
        egestas risus iaculis blandit eleifend. Nullam ut lorem tellus. Praesent
        ut orci luctus, cursus augue sit amet, varius augue. Nulla facilisi.
        Etiam ante diam, varius id molestie at, dictum non enim. Curabitur
        imperdiet, quam ut rhoncus faucibus, nisl nunc fringilla diam, dapibus
        vulputate mi ante vitae enim. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Vivamus ac orci accumsan,
        varius augue quis, vulputate dui. Fusce scelerisque ipsum ut posuere
        faucibus. Maecenas sodales metus tellus. Vivamus fringilla lorem at
        magna facilisis, id auctor magna lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        eleifend quam id congue. Vivamus ultricies leo non dolor sollicitudin
        elementum. Aenean at porttitor nisi, et bibendum erat. Nam placerat, leo
        vitae mollis porttitor, lacus erat posuere sem, eu sollicitudin velit
        orci et felis. Aliquam condimentum vestibulum nibh at blandit. Donec
        egestas risus iaculis blandit eleifend. Nullam ut lorem tellus. Praesent
        ut orci luctus, cursus augue sit amet, varius augue. Nulla facilisi.
        Etiam ante diam, varius id molestie at, dictum non enim. Curabitur
        imperdiet, quam ut rhoncus faucibus, nisl nunc fringilla diam, dapibus
        vulputate mi ante vitae enim. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Vivamus ac orci accumsan,
        varius augue quis, vulputate dui. Fusce scelerisque ipsum ut posuere
        faucibus. Maecenas sodales metus tellus. Vivamus fringilla lorem at
        magna facilisis, id auctor magna lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        eleifend quam id congue. Vivamus ultricies leo non dolor sollicitudin
        elementum. Aenean at porttitor nisi, et bibendum erat. Nam placerat, leo
        vitae mollis porttitor, lacus erat posuere sem, eu sollicitudin velit
        orci et felis. Aliquam condimentum vestibulum nibh at blandit. Donec
        egestas risus iaculis blandit eleifend. Nullam ut lorem tellus. Praesent
        ut orci luctus, cursus augue sit amet, varius augue. Nulla facilisi.
        Etiam ante diam, varius id molestie at, dictum non enim. Curabitur
        imperdiet, quam ut rhoncus faucibus, nisl nunc fringilla diam, dapibus
        vulputate mi ante vitae enim. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Vivamus ac orci accumsan,
        varius augue quis, vulputate dui. Fusce scelerisque ipsum ut posuere
        faucibus. Maecenas sodales metus tellus. Vivamus fringilla lorem at
        magna facilisis, id auctor magna lacinia.
      </p>
    </div>
  );
}

export default ModalPage;
