import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative">
      <Button primary onClick={() => setShowModal(true)}>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
}

export default ModalPage;
