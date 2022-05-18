import { useState } from "react";
import memberStore from "../stores/MemberStore";
import MemberList from "./MemberList";
import CreateMemberModal from "./CreateMemberModal";

function MembersPage() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <div>
      <center>
        <MemberList />
        <button>
          <span onClick={openModal}>New Member</span>
          <CreateMemberModal isOpen={isOpen} closeModal={closeModal} />
        </button>
      </center>
    </div>
  );
}

export default MembersPage;
