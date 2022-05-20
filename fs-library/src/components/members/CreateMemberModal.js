import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import memberStore from "../../stores/MemberStore";
// import { Modal, Button} from "react-bootstrap";

function CreateMemberModal(props) {
  const [member, setMember] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    membership: "silver",
    currentlyBorrowedBooks: [],
    slug: "",
  });
  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    memberStore.AddMember(member);
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
          <Modal.Title style={{ color: "#7678ED" }}>
            Create a member
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>First Name</InputGroup.Text>
              <Form.Control
                type="text"
                name="firstName"
                onChange={handleChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Last Name</InputGroup.Text>
              <Form.Control
                type="text"
                name="lastName"
                onChange={handleChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Membership</InputGroup.Text>
              <Form.Control
                type="text"
                name="membership"
                onChange={handleChange}
                placeholder="silver , gold , or platinum"
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* variant="primary" */}
          <Button
            style={{ backgroundColor: "#FFC300", border: "0" }}
            onClick={handleSubmit}
          >
            Add Member
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default CreateMemberModal;
