// import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import memberStore from "../../stores/MemberStore";

// import { Modal, Button} from "react-bootstrap";
//firsNameBorrowedBy
function BorrowedByList(props) {
  let noDuplications = [...new Set(props.firstNameBorrowedBy)];
  const dropListMember = noDuplications.map((element) => (
    <div style={{ background : "white" , color : "black"}} value={element}> {element}
    </div>
   
  ));

  return (
    <div className="center">
      <div class="  scrollBorrow ">
       
        {dropListMember}
      </div>
    </div>
  );
}
export default BorrowedByList;
