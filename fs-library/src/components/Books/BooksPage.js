import { useState } from "react";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import BookList from "./BookList";
import AddBookModal from "./AddBookModal";

function BooksPage() {
<<<<<<< HEAD
  // const [isOpen, setIsOpen] = useState(false);

  //const closeModal = () => setIsOpen(false);

  // const openModal = () => setIsOpen(true);
=======
  

>>>>>>> 3468b61 (add button works)
  return (
    <div class="bookPage">
      <center>
<<<<<<< HEAD
        <h1 style={{ color: "#7678ED" }}>شنو نكتب اهني</h1>
=======
        <h1>Archive Library Book</h1>
        
>>>>>>> 3468b61 (add button works)
        <BookList />
        

      </center>
    </div>
  );
}

export default BooksPage;
