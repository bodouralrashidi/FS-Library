import axios from "axios";
import { makeAutoObservable, observable, action } from "mobx";
import slugify from "react-slugify";

class MemberStore {
  members = [];

  constructor() {
    makeAutoObservable(this, {
      AddMember: action,
      update: action,
      returnbook: action,
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
  update = (bookId, memberId) => {
    try {
      // const member = this.members.find((i) => i.id === updated.id);
      // member.title = updated.title;
      // member.description = updated.description;
      // member.image = update.image;
      console.log("changed data ", bookId, memberId);
      axios.put(
        `https://library-borrow-system.herokuapp.com/api/books/${bookId}/borrow/${memberId}`
      );
    } catch (error) {
      console.error(error);
    }
  };
  returnbook = async (member, index, book) => {
    console.log("member current books " + member.currentlyBorrowedBooks);

    //to remove from the currently borrowed array
    try {
      const response = await axios.put(
        `https://library-borrow-system.herokuapp.com/api/books/${book._id}/return/${member._id}`
      );
      member.currentlyBorrowedBooks.splice(index, 1);
      // this.members.find(member).currentlyBorrowedBooks.splice(index, 1);
      // console.log("member found in members", this.members.find(member));

      console.log("Dataaa" + Object.entries(response.data));
    } catch (error) {
      console.error("ERORRRRRRR" + error);
    }
    return book;
  };
}

const memberStore = new MemberStore();
memberStore.fetchMembers();
export default memberStore;
