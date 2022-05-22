import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import memberStore from "../../stores/MemberStore";
import axios from "axios";

function ReturnModal(props) {
  let BOOK = props.book;

  let MEMBER = memberStore.members.filter(
    (member) => member._id == props.BorrowMemberid
  );
  // const [member, setMember] = useState(MEMBER[0]);
  //   let memindex = members.indexOf(member);
  let membername = "";
  let index = 0;
  if (MEMBER.length > 0) {
    membername = `${MEMBER[0].firstName} ${MEMBER[0].lastName}`;
    index = MEMBER[0].currentlyBorrowedBooks.indexOf(BOOK._id);
  }

  // const returnbook = async () => {
  //   member.currentlyBorrowedBooks.splice(index, 1); //to remove from the currently borrowed array
  //   try {
  //     const response = await axios.put(
  //       `https://library-borrow-system.herokuapp.com/api/books/${book._id}/return/${member._id}`
  //     );
  //     console.log("Dataaa" + response.data);
  //   } catch (error) {
  //     console.error("ERORRRRRRR" + error);
  //   }
  // };

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
