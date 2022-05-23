import { useState } from "react";
import MemberList from "./MemberList";
import CreateMemberModal from "./CreateMemberModal";

function MembersPage() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <div>
      <center>
        <h1 style={{ color: "#7678ED" }}> Archive Library Members</h1>
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
