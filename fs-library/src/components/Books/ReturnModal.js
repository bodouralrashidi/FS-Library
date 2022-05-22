import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import memberStore from "../../stores/MemberStore";
import axios from "axios";

function ReturnModal(props) {
  let BOOK = props.book;

  let MEMBER = memberStore.members.filter(
    (member) => member._id == props.BorrowMemberid
  );

  let membername = "";
  let index = 0;
  if (MEMBER.length > 0) {
    membername = `${MEMBER[0].firstName} ${MEMBER[0].lastName}`;
    index = MEMBER[0].currentlyBorrowedBooks.indexOf(BOOK._id);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    memberStore.returnbook(MEMBER[0], index, BOOK);
    props.closeModal();
  };
  return (
    <div>
      <Modal
        class="modalbody"
        centered
        show={props.isOpen}
        onHide={props.closeModal}
        style={{ backgroundColor: "rgba(118, 120, 237, 0.3)" }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#7678ED" }}>Return Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Book: {BOOK.title}</h6>
          <br />
          <h6>Currently borrowed by : {membername}</h6>
        </Modal.Body>
        <Modal.Footer>
          {/* variant="primary" */}
          <Button
            style={{ backgroundColor: "#FFC300", border: "0" }}
            onClick={handleSubmit}
          >
            Return
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ReturnModal;
