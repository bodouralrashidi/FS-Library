import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import memberStore from "../stores/MemberStore";

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
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a member</Modal.Title>
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
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Add Member
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default CreateMemberModal;
