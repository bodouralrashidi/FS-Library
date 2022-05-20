import React from "react";
import memberStore from "../../stores/MemberStore";
import MemberInfo from "./MemberInfo";
import { observer } from "mobx-react";

function MemberList() {
  const membersList = memberStore.members.map((member) => {
    return <MemberInfo member={member} key={member._id} />;
  });

  return (
    <div class="memberListContainer">
      <div class="MembersList">{membersList} </div>
    </div>
  );
}

export default observer(MemberList);
