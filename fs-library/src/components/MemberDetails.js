import React from "react";
import memberStore from "../stores/MemberStore";
import { useParams, Navigate } from "react-router-dom";

function MemberDetails() {
  // const trip = tripsData[0];
  const { memberSlug } = useParams();
  //we put + before tripId in the following line to convert tripId from string to number
  const member = memberStore.members.find(
    (member) => member.slug === memberSlug
  );
  if (!member) return <Navigate to="/" />;

  //for testing (worked)
  console.log("member id consoled " + memberSlug);
  return (
    <div style={{ padding: "10px" }}>
      <h1>Member Information</h1>
      <div>
        <h3>
          Name :{member.firstName} {member.lastName}
        </h3>
        <h3>Membership :{member.membership}</h3>
        <h3>currently Borrowed Books :{member.currentlyBorrowedBooks}</h3>
      </div>
    </div>
  );
}

export default MemberDetails;
