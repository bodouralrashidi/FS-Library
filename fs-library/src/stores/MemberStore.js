import axios from "axios";
import { makeAutoObservable, observable, action } from "mobx";
import slugify from "react-slugify";

class MemberStore {
  members = [];

  constructor() {
    makeAutoObservable(this,{
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
<<<<<<< HEAD
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

=======
    console.log("add member", member);
   member._id = this.members[this.members.length - 1].id + 1;
   console.log("member id",member._id)
   
   member.slug = slugify(member.firstName +"-"+ member.lastName);
    console.log("slug:" + member.slug);
>>>>>>> f2be81b3d8b2c870d9dd9ab5a3e3868bdf3e241f
    this.members.push(member);
    console.log("add member", member);
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
