import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import bookStore from "../../stores/BookStore";

function AddBookModal(props) {
  const [book, setBook] = useState({
    _id: "",
    author: "",
    title: "",
    genres: [],
    available: true,
    borrowedBy: [],
    slug: "",
    image:
      "",
  });
  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
   bookStore.AddBook(book);
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
          <Modal.Title>Create a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>Book Title</InputGroup.Text>
              <Form.Control
                type="text"
                name="title"
                onChange={handleChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>author</InputGroup.Text>
              <Form.Control
                type="text"
                name="Author"
                onChange={handleChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>genres</InputGroup.Text>
              <Form.Control
                type="text"
                name="genres"
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
