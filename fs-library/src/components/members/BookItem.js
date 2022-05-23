function BookItem(book) {
  console.log("book " + Object.keys(book.book));
  let BOOK = book.book;
  return (
    //borrowd book item

    <img
      src={BOOK.image}
      style={{
        width: "150px",
        height: "200px",
        marginTop: "20px",
        borderRadius: "10px",
        margin : "20px",
        boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      }}
      alt={BOOK.title}
    />
  );
}

export default BookItem;
