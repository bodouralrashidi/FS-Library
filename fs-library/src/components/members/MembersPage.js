import { useState } from "react";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";

import memberStore from "../../stores/MemberStore";
import MemberList from "./MemberList";
import CreateMemberModal from "./CreateMemberModal";

function MembersPage() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <div class="memberPage">
      <center>
<<<<<<< HEAD
        <h1 style={{ color: "#7678ED", marginTop: "30px" }}>
          Rkive Library Members
        </h1>
=======
        <h1 style={{ color: "#7678ED" }}> Archive Library Members</h1>
>>>>>>> 3468b61 (add button works)
        <MemberList />
        <button class="addMember-btn">
          <span onClick={openModal}> + </span>
          <CreateMemberModal isOpen={isOpen} closeModal={closeModal} />
        </button>
      </center>
    </div>
  );
}

export default MembersPage;
