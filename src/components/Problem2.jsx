import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);

  const handleClose = () => {
    setShowModalA(false);
    setShowModalB(false);
  };
  const handleShowModalA = () => {
    setShowModalA(true);
    setShowModalB(false);
  };
  const handleShowModalB = () => {
    setShowModalA(false);
    setShowModalB(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleShowModalA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={handleShowModalB}
          >
            US Contacts
          </button>
        </div>

        {/* show modal A */}
        <Modal show={showModalA} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading Modal A</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button
              variant="warning"
              className="mx-3 my-3"
              onClick={handleShowModalA}
            >
              Modal A - All Contacts
            </Button>
            <Button
              variant="success"
              className="mx-3 my-3"
              onClick={handleShowModalB}
            >
              Modal B - Us Contacts
            </Button>
            <Button
              variant="danger"
              className="mx-3 my-3"
              onClick={handleClose}
            >
              Modal C - Close
            </Button>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        {/* show modal B */}
        <Modal show={showModalB} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading Modal B</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button
              variant="warning"
              className="mx-3 my-3"
              onClick={handleShowModalA}
            >
              Modal A - All Contacts
            </Button>
            <Button
              variant="success"
              className="mx-3 my-3"
              onClick={handleShowModalB}
            >
              Modal B - Us Contacts
            </Button>
            <Button
              variant="danger"
              className="mx-3 my-3"
              onClick={handleClose}
            >
              Modal C - Close
            </Button>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Problem2;
