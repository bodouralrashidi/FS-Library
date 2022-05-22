import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import memberStore from "../../stores/MemberStore";
import axios from "axios";
// import { Modal, Button} from "react-bootstrap";

function ReturnModal(props) {
  let BOOK = props.book;
  //   const [member, setMember] = useState({
  //     _id: "",
  //     firstName: "",
  //     lastName: "",
  //     membership: "silver",
  //     currentlyBorrowedBooks: [],
  //     slug: "",
  //   });
  //   console.log("borrowby  " + props.BorrowMemberid);
  const [book, setBook] = useState(BOOK);
  console.log("available before " + book.available);
  let MEMBER = memberStore.members.filter(
    (member) => member._id == props.BorrowMemberid
  );
  let member = MEMBER[0];
  let membername = "";
  let index = 0;
  if (MEMBER.length > 0) {
    membername = `${member.firstName} ${member.lastName}`;
    index = member.currentlyBorrowedBooks.indexOf(BOOK._id);
  }

  //   console.log("member   " + MEMBER);

  const returnbook = async () => {
    // setBook({ book, available: true });
    // member.currentlyBorrowedBooks.splice(index, 1);
    // console.log("available " + book.available);
    console.log("memberid " + member._id);
    console.log("bookid " + book._id);
    try {
      const response = await axios.put(
        `https://library-borrow-system.herokuapp.com/api/books/${book._id}/return/${member._id}`
      );
      console.log("Dataaa" + response.data);
    } catch (error) {
      console.error("ERORRRRRRR" + error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    returnbook();
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
          <h6>Book: {book.title}</h6>
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
