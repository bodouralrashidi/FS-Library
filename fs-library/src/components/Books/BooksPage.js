import { useState } from "react";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import BookList from "./BookList";
//import CreateMemberModal from "./CreateMemberModal";

function BooksPage() {
  const [isOpen, setIsOpen] = useState(false);

  //const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <div class="memberPage">
      <center>
        <h1>LB Library Book</h1>
        <BookList />
        {/* <button class="addMember-btn">
          <span onClick={openModal}> + </span>
          <CreateMemberModal isOpen={isOpen} closeModal={closeModal} />
        </button> */}
      </center>
    </div>
  );
}

export default BooksPage;
