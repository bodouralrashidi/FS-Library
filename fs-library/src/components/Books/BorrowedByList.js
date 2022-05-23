// import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import memberStore from "../../stores/MemberStore";

// import { Modal, Button} from "react-bootstrap";
//firsNameBorrowedBy
function BorrowedByList(props) {
  let noDuplications = [...new Set(props.firstNameBorrowedBy)];
  const dropListMember = noDuplications.map((element) => (
    <option value={element}> {element}</option>
  ));

  return (
    <div>
      <select class="dropdown">
        <option value="" selected disapled hidden>
          Borrowed By{" "}
        </option>
        {dropListMember}
      </select>
    </div>
  );
}
export default BorrowedByList;
