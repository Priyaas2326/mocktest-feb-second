# mocktest-feb-second
Project Description:
The project is about building a simple library management website where users can issue books and keep track of the status of the books they have issued. The website has a user interface designed in Figma that should be used as a reference for building the website.

Functional Requirements:
The website should have a form where users can enter the name of the book they want to issue and the name of the person they are issuing the book to.
When the user clicks on the "Issue Book" button, the issued books should be shown in a table below the form.
The website should have an array to store the details of the issued books. The array should have objects with the following structure: {id:1, book_name:"", issued_to:"", issued_time:"", status:""}.
When a book is issued, the book's status should be "not returned" by default. The ID of the book should be n+1 where n is the number of books issued currently. The issued time should be the time when the book was issued.
The array of issued books should be mapped to the table in the UI. The last column of the table, which shows the book's status, should be editable.
The website should have a function allowing users to edit the book's status. The status can be either "returned" or "not returned".
The color of the status column should be green if the book has been returned and red if the book has not been returned.
