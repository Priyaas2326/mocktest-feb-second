// initialize array to store issued books
let issuedBooks = [];

// get form and table elements
const form = document.querySelector("form");
const issuedBooksTable = document.querySelector("#issued-books");

// add event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // get input values
  const bookName = document.querySelector("#book-name").value;
  const issuedTo = document.querySelector("#issued-to").value;

  // create new book object
  const newBook = {
    id: issuedBooks.length + 1,
    book_name: bookName,
    issued_to: issuedTo,
    issued_time: new Date().toLocaleString(),
    status: "not returned",
  };

  // add new book object to array and update table
  issuedBooks.push(newBook);
  updateTable();
});

// add event listener to the status column of the table
issuedBooksTable.addEventListener("click", (event) => {
  const target = event.target;

  // check if the clicked element is a status cell
  if (target.classList.contains("status-cell")) {
    // get book ID and current status
    const bookId = parseInt(target.dataset.bookId);
    const currentStatus = target.textContent;

    // update status and update table
    const newStatus = currentStatus === "returned" ? "not returned" : "returned";
    issuedBooks = issuedBooks.map((book) => {
      if (book.id === bookId) {
        book.status = newStatus;
      }
      return book;
    });
    updateTable();
  }
});

// function to update the table with issued books
function updateTable() {
  issuedBooksTable.innerHTML = "";

  issuedBooks.forEach((book) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = book.id;
    row.appendChild(idCell);

    const bookNameCell = document.createElement("td");
    bookNameCell.textContent = book.book_name;
    row.appendChild(bookNameCell);

    const issuedToCell = document.createElement("td");
    issuedToCell.textContent = book.issued_to;
    row.appendChild(issuedToCell);

    const issuedTimeCell = document.createElement("td");
    issuedTimeCell.textContent = book.issued_time;
    row.appendChild(issuedTimeCell);

    const statusCell = document.createElement("td");
    statusCell.textContent = book.status;
    statusCell.classList.add("status-cell");
    statusCell.dataset.bookId = book.id;
    if (book.status === "returned") {
      statusCell.classList.add("status-returned");
    } else {
      statusCell.classList.add("status-not-returned");
    }
    row.appendChild(statusCell);

    issuedBooksTable.appendChild(row);
  });
}
