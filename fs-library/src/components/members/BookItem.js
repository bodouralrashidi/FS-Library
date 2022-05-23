function BookItem(book) {
  console.log("book " + Object.keys(book.book));
  let BOOK = book.book;
  return (
    //borrowd book item

    <img
      src={BOOK.image}
      style={{ width: "150px", height: "200px", marginTop: "20px" , borderRadius: "10px" , border: "5px solid #ffc300"
    }}
      alt={BOOK.title}
    />
  );
}

export default BookItem;
