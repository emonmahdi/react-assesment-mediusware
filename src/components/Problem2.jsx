import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [onlyEven, setOnlyEven] = useState(false);

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const url = "https://contact.mediusware.com/api/contacts/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setContacts(data.results);
      });
  }, []);

  console.log("contacts", contacts);

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

  const handleCheckboxChange = () => {
    setOnlyEven(!onlyEven);
  };

  const contactFiltered = contacts.filter(
    (contact) => !onlyEven || contact.id % 2 === 0
  );

  const countryName = contacts.map((con) => console.log(con));
  console.log("country name", countryName);

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
            {/* Display contacts based on the filter */}
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>Country: {contact?.country?.name}</li>
              ))}
            </ul>
            <button
              type="button"
              onClick={handleShowModalA}
              style={{
                background: "#46139f",
                borderRadius: "5px",
                color: "#fff",
                outline: "none",
                border: "none",
                marginRight: "5px",
              }}
            >
              Modal A - All Contacts
            </button>
            <button
              type="button"
              onClick={handleShowModalB}
              style={{
                background: "#ff7f50",
                borderRadius: "5px",
                color: "#fff",
                outline: "none",
                border: "none",
                marginRight: "5px",
              }}
            >
              Modal B - Us Contacts
            </button>
            <button
              type="button"
              onClick={handleClose}
              style={{
                background: "#46139f",
                borderRadius: "5px",
                color: "#fff",
                outline: "none",
                border: "none",
                margin: "8px 0",
              }}
            >
              Modal C - Close
            </button>
          </Modal.Body>
          <hr />
          <div>
            <ul>
              {contactFiltered.map((contact) => (
                <li key={contact.id}>Phone: {contact.phone}</li>
              ))}
            </ul>
          </div>
          <Modal.Footer className="justify-content-start">
            <div className="form-check ">
              <input
                type="checkbox"
                className="form-check-input"
                id="onlyEvenCheckbox"
                checked={onlyEven}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="onlyEvenCheckbox">
                Only Even
              </label>
            </div>
          </Modal.Footer>
        </Modal>
        {/* show modal B */}
        <Modal show={showModalB} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading Modal B</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {contacts.map((contact) => (
                <div key={contact.id}>
                  {contact?.country?.name === "United States" && (
                    <span>Country: {contact?.country?.name}</span>
                  )}
                </div>
              ))}
            </ul>
            <button
              type="button"
              onClick={handleShowModalA}
              style={{
                background: "#46139f",
                borderRadius: "5px",
                color: "#fff",
                outline: "none",
                border: "none",
                marginRight: "5px",
              }}
            >
              Modal A - All Contacts
            </button>
            <button
              type="button"
              onClick={handleShowModalB}
              style={{
                background: "#ff7f50",
                borderRadius: "5px",
                color: "#fff",
                outline: "none",
                border: "none",
                marginRight: "5px",
              }}
            >
              Modal B - Us Contacts
            </button>
            <button
              type="button"
              onClick={handleClose}
              style={{
                background: "#46139f",
                borderRadius: "5px",
                color: "#fff",
                outline: "none",
                border: "none",
                margin: "8px 0",
              }}
            >
              Modal C - Close
            </button>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Problem2;
