function BookItem(book) {
  console.log("book " + Object.keys(book.book));
  let BOOK = book.book;
  return (
    <img
      src={BOOK.image}
      style={{ width: "150px", height: "200px", marginTop: "20px" }}
      alt={BOOK.title}
    />
  );
}

export default BookItem;