import axios from "axios";
import { makeAutoObservable, observable, action } from "mobx";
import slugify from "react-slugify";

class MemberStore {
  members = [];

  constructor() {
    makeAutoObservable(this, {
      AddMember: action,
    });
  }

  fetchMembers = async () => {
    try {
      const response = await axios.get(
        `https://library-borrow-system.herokuapp.com/api/members`
      );

      this.members = response.data;
      console.log("responsoe/////", response.data);
    } catch (error) {
      console.error("erorrrrrr" + error);
    }
  };

  //getting error 500
  AddMember = async (member) => {
    member._id = this.members[this.members.length - 1].id + 1;
    const currentMember = member.firstName + " " + member.lastName;
    member.slug = slugify(currentMember, { delimiter: "-" });
    this.members.push(member);
    //console.log("add member", member);

    try {
      const response = await axios.post(
        "https://library-borrow-system.herokuapp.com/api/members",
        member
      );
      console.log("Dataaa" + response.data);
    } catch (error) {
      console.error("ERORRRRRRR" + error);
    }
  };
}

const memberStore = new MemberStore();
memberStore.fetchMembers();
export default memberStore;
