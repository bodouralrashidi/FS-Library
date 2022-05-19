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
    function makeid() {
      var text = "";
      var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 24; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    let id = makeid();
    member._id = id;
    let memberName = `${member.firstName} ${member.lastName}`;
    member.slug = slugify(memberName, { delimiter: "-" });
    console.log("slugggg " + member.slug);

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
