import React from "react";
import memberStore from "../../stores/MemberStore";
import "../../App.css";
import { Link } from "react-router-dom";

function MemberInfo(props) {
  const member = props.member;
  const fullName = `${member.firstName} ${member.lastName}`;
  const membershipClass = `initCircle${member.membership.toUpperCase()}`;

  return (
    <Link
      style={{
        textDecoration: "none",
      }}
      to={`/member-detail/${member.slug}`}
    >
      <div class="memberInfo">
        <div class={membershipClass}>
          {member.firstName[0].toUpperCase()}
          {member.lastName[0].toUpperCase()}
        </div>
        <div class="name-membership">
          <h4
            class="noMargin infostyle"
            style={{
              textDecoration: "none",
              color: "#5B5B5B",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {fullName}
          </h4>
          <h5
            class="noMargin"
            style={{
              textDecoration: "none",
              color: "#5B5B5B",
              fontWeight: "bold",
              fontSize: "10px",
            }}
          >
            {member.membership}
          </h5>
        </div>
      </div>
    </Link>
  );
}

export default MemberInfo;
