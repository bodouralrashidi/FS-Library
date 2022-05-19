import React from "react";
import bookStore from "../../stores/BookStore";
import BookInfo from "./BookInfo";
import { observer } from "mobx-react";


function BookList() {
  const booksList = bookStore.books.map((book) => {
    return <BookInfo book={book} key={book._id} />;
  });

  return (
    <div>
      <div class="MembersList">{booksList} </div>
    </div>
  );
}

export default observer(BookList);
