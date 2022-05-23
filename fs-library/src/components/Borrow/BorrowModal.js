import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import memberStore from "../../stores/MemberStore";

function BorrowModal(props) {
  const [member, setMember] = useState("");
  let chosenMember = {};
  const dropListMember = memberStore.members.map((element) => (
    <option value={element.firstName + " " + element.lastName}>
      {" "}
      {element.firstName + " " + element.lastName}
    </option>
  ));
  const handleCheckMember = (event) => {
    memberStore.members.map((element) => {
      if (element.firstName + " " + element.lastName == member) {
        chosenMember = element;
      }
    });
    if (props.book.available == true) {
      if (
        chosenMember.membership == "silver" &&
        chosenMember.currentlyBorrowedBooks.length < 2
      ) {
        memberStore.update(props.bookid, chosenMember._id);
      } else if (
        chosenMember.membership == "silver" &&
        chosenMember.currentlyBorrowedBooks.length == 2
      ) {
        alert(
          "you can't borrow this book , you reached maximum number of books"
        );
      } else if (
        chosenMember.membership == "gold" &&
        chosenMember.currentlyBorrowedBooks.length < 3
      ) {
        memberStore.update(props.bookid, chosenMember._id);
      } else if (
        chosenMember.membership == "gold" &&
        chosenMember.currentlyBorrowedBooks.length == 3
      ) {
        alert(
          "you can't borrow this book , you reached maximum number of books"
        );
      } else if (
        chosenMember.membership == "platinum" &&
        chosenMember.currentlyBorrowedBooks.length < 5
      ) {
        memberStore.update(props.bookid, chosenMember._id);
      } else if (
        chosenMember.membership == "platinum" &&
        chosenMember.currentlyBorrowedBooks.length == 5
      ) {
        alert(
          "you can't borrow this book , you reached maximum number of books"
        );
      }
    } else alert("The book is not available");

    event.preventDefault();

    props.closeModal();
  };

  return (
    <div>
      <Modal
        centered
        show={props.isOpen}
        onHide={props.closeModal}
        style={{ backgroundColor: "rgba(118, 120, 237, 0.3)" }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#7678ED" }}>Borrow Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup>
              <InputGroup.Text>Select Member</InputGroup.Text>
              <select
                class="dropdown"
                onChange={(e) => setMember(e.target.value)}
              >
                {dropListMember}
              </select>
            </InputGroup>
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#FFC300", border: "0" }}
            onClick={handleCheckMember}
          >
            Borrow
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default BorrowModal;
