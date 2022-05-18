import React from "react";
import memberStore from "../stores/MemberStore";
import "../App.css";

function MemberInfo(props) {
  const member = props.member;
  const fullName = `${member.firstName} ${member.lastName}`;

  return (
    <div class="memberInfo">
      <h4 class="noMargin">{fullName}</h4>
      <h5 class="noMargin">Membership: {member.membership}</h5>
    </div>
  );
}

export default MemberInfo;
