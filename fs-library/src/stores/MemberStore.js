import axios from "axios";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";

class MemberStore {
  members = [];

  constructor() {
    makeAutoObservable(this);
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
    // room.id = this.rooms[this.rooms.length - 1].id + 1;
    member.slug = slugify(member.firstName + member.lastName);
    console.log("slug" + member.slug);
    this.members.push(member);
    // if (member.membership == "") {
    //   member.membership = "silver";
    // }
    try {
      const response = await axios.post(
        "https://library-borrow-system.herokuapp.com/api/members",
        member
      );
      console.log("Dataaa" + response.data);
      // this.rooms.push(response.data);
    } catch (error) {
      console.error("ERORRRRRRR" + error);
    }
  };
}

const memberStore = new MemberStore();
memberStore.fetchMembers();
export default memberStore;
