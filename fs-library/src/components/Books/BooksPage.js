import BookList from "./BookList";
function BooksPage() {
  return (
    <div class="bookPage">
      <center>
        <h1 style={{ color: "#7678ED" }}> Archive Library Books </h1>
        <BookList />
      </center>
    </div>
  );
}

export default BooksPage;
