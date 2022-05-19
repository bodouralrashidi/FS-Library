import React from "react";
import memberStore from "../stores/MemberStore";
import "../App.css";
import { Link } from "react-router-dom";

function MemberInfo(props) {
  const member = props.member;
  const fullName = `${member.firstName} ${member.lastName}`;

  return (
    <Link to={`/member-detail/${member.slug}`}>
      <div class="memberInfo">
        <h4 class="noMargin">{fullName}</h4>
        <h5 class="noMargin">Membership: {member.membership}</h5>
      </div>
    </Link>
  );
}

export default MemberInfo;
