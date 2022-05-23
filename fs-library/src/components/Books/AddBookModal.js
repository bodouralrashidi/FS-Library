import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import bookStore from "../../stores/BookStore";
import { MDBCheckbox } from "mdb-react-ui-kit";

function AddBookModal(props) {
  const [genresSelected, setGenresSelected] = useState([]);

  const genresArray = [
    "Action",
    "Fantasy",
    "Sci-Fi",
    "Romance",
    "Fiction",
    "Self-Help",
    "Thriller",
    "Suspense",
    "Biography",
    "Business",
    "Crime",
    "Mystery",
  ];
  const handleChangeBox = (event) => {
    const genre = event.target.value;

    if (genresSelected.indexOf(genre) == -1) {
      genresSelected.push(genre);
      console.log("genres array", genresSelected);
    } else {
      genresSelected.splice(genresSelected.indexOf(genre), 1);
      console.log(genresSelected);
    }
  };

  const checkBox = genresArray.map((element) => (
    <MDBCheckbox
      name="inlineCheck"
      id="inlineCheckbox1"
      value={element}
      label={element}
      onChange={handleChangeBox}
      inline
    />
  ));

  const [book, setBook] = useState({
    _id: "",
    author: "",
    title: "",
    genres: [],
    available: true,
    borrowedBy: [],
    slug: "",
    image: "",
  });
  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleCheckBox = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    console.log(book.genres.length < 1);

    console.log("The added book", book);
    book.genres = genresSelected;

    if (book.genres.length < 1) {
      book.genres.push("Fantasy");
    }

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
        style={{ backgroundColor: "rgba(118, 120, 237, 0.3)" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>Book Title</InputGroup.Text>
              <Form.Control type="text" name="title" onChange={handleChange} />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>author</InputGroup.Text>
              <Form.Control type="text" name="author" onChange={handleChange} />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Image</InputGroup.Text>
              <Form.Control type="text" name="image" onChange={handleChange} />
            </InputGroup>
            <InputGroup>{checkBox}</InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AddBookModal;
