let arrayBookShelf = [];
//DOM elements
const addBookButton = document.getElementById("create-book-button");
const bookForm = document.querySelector(".form_section");
const submitButton = document.getElementById("add-book");
const uiBookShelf = document.querySelector(".book_shelf");
// event listeners
addBookButton.addEventListener("click", displayForm);
submitButton.addEventListener("click", handleAddBook);
// constructor variables
let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let numPages = document.getElementById("numpages");

// book constructor
class Book {
  constructor() {
    this.title = bookTitle.value;
    this.author = bookAuthor.value;
    this.pageNumber = numPages.value;
    this.status = "Read";
    return this.title, this.author, this.pageNumber, this.status;
  }
  deleteFromArray() {
    let i = arrayBookShelf.indexOf(this);
    if (i < arrayBookShelf.length) {
      arrayBookShelf.splice(i, 1);
      console.log("book deleted");
    }
    return arrayBookShelf;
  }
  changeStatusArray() {
    this.status = this.status === "Read" ? "Not Read" : "Read";
    console.log("Status changed!");
  }
}
// create, add and display books
function handleAddBook(e) {
  e.preventDefault();
  hideForm();
  addBookToArray();
  handleBookDisplay();
  emptyForm();
  console.log("book added and displayed properly");
}
function addBookToArray() {
  const newBook = new Book();
  console.log("new book created!");
  return arrayBookShelf.push(newBook);
}
function handleBookDisplay() {
  uiBookShelf.innerHTML = "";
  arrayBookShelf.forEach((newBook) => {
    // creating book DOM elements
    let book = document.createElement("div");
    const bookCover = document.createElement("div");
    const coverTitle = document.createElement("p");
    const coverAuthor = document.createElement("p");
    const phrase = document.createElement("p");
    const coverNumPages = document.createElement("p");
    let toggleReadButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    // adding DOM classes
    book.classList.add("book");
    bookCover.classList.add("book_cover");
    coverTitle.classList.add("book_cover--title");
    coverAuthor.classList.add("book_cover--author");
    phrase.classList.add("book_cover--phrase");
    coverNumPages.classList.add("book_cover--pages");
    toggleReadButton.classList.add("toggle_read");
    toggleReadButton.classList.add("read");
    deleteButton.classList.add("delete_btn");
    // DOM arrangement
    book.appendChild(bookCover);
    book.appendChild(toggleReadButton);
    book.appendChild(deleteButton);
    bookCover.appendChild(coverTitle);
    bookCover.appendChild(phrase);
    bookCover.appendChild(coverAuthor);
    bookCover.appendChild(coverNumPages);
    uiBookShelf.appendChild(book);
    // adding DOM text content
    coverTitle.textContent = newBook.title;
    phrase.textContent = "by";
    coverAuthor.textContent = newBook.author;
    coverNumPages.textContent = `Number of Pages : ${newBook.pageNumber}`;
    toggleReadButton.textContent = "Read";
    deleteButton.textContent = "Delete";
    // handle book event listeners
    toggleReadButton.addEventListener("click", handleToggleRead);
    deleteButton.addEventListener("click", removeFromDisplay);
    // handle book removal from array and display;
    function removeFromDisplay() {
      newBook.deleteFromArray();
      uiBookShelf.removeChild(book);
    }
    // handle toggling between 'read' and 'not read'
    function handleToggleRead() {
      toggleReadButton.classList.toggle("read");
      toggleReadButton.classList.toggle("nt-read");
      newBook.changeStatusArray();
      toggleReadButton.textContent = newBook.status;
    }
  });
}
// handle modal form
function displayForm() {
  bookForm.style.display = "flex";
}
function hideForm() {
  bookForm.style.display = "none";
}
function emptyForm() {
  bookTitle.value = "";
  bookAuthor.value = "";
  numPages.value = "";
}
