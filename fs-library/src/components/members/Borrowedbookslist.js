import bookStore from "../../stores/BookStore";
import BookItem from "./BookItem";
import memberStore from "../../stores/MemberStore";

//pass member from memberdetails call
function Borrowedbooklist(member) {
  let MEMBER = member.member;

  let filteredArr = [];
  let books = bookStore.books;
  let bb = MEMBER.currentlyBorrowedBooks;

  for (let i = 0; i < bb.length; i++) {
    for (let j = 0; j < books.length; j++) {
      if (bb[i] == books[j]._id) {
        filteredArr.push(books[j]);
      }
    }
  }

  let booklist = filteredArr.map((book) => {
    return <BookItem book={book} key={book._id} />;
  });

  return <div className="borrowedBooks Container">{booklist} </div>;
}

export default Borrowedbooklist;
