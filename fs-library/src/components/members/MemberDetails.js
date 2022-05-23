import React from "react";
import memberStore from "../../stores/MemberStore";
import { useParams, Navigate } from "react-router-dom";
import Borrowedbooklist from "./Borrowedbookslist";
import { observer } from "mobx-react";

function MemberDetails() {
  // const trip = tripsData[0];

  const { memberSlug } = useParams();
  //we put + before tripId in the following line to convert tripId from string to number
  const member = memberStore.members.find(
    (member) => member.slug === memberSlug
  );
  let bb = member.currentlyBorrowedBooks;
  if (!member) return <Navigate to="/" />;
  const fullName = `${member.firstName} ${member.lastName}`;
  const membershipClass = `memberShipCircle${member.membership.toUpperCase()}`;
  const namecontainerClass = `nameContainer${member.membership.toUpperCase()}`;

  //for testing (worked)
  console.log("member id consoled " + memberSlug);
  return (
    <div className="">
    <div className="MemberDetailsPage  " style={{ padding: "10px" , borderStyle: "solid", margin: "20px", borderRadius: "20px" ,}}>
      <div className={namecontainerClass}>
        <div className="initCircle">
          {member.firstName[0].toUpperCase()}
          {member.lastName[0].toUpperCase()}
        </div>
        <h5 style={{ marginTop: "30px", fontWeight: "bold" }}>{fullName}</h5>
        <div className="membership" style={{ marginTop: "15px" }}>
          <h5 style={{ fontWeight: "bold" }}>{member.membership}</h5>
          {/* <div className={membershipClass}></div> */}
        </div>
      </div>
      <div className="borrowedBooks">
        <h3 style={{ color: "black" }}>Currently Borrowed Books</h3>
        <Borrowedbooklist member={member} />
      </div>
    </div>
    </div>
  );
}

export default observer(MemberDetails);
