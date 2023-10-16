//DOM elements
const addBookButton = document.getElementById('create-book-button');
const bookForm = document.querySelector('.modal-form');
const submitButton = document.getElementById('add-book');
const uiBookShelf = document.querySelector('.book_shelf');
let title = document.getElementById('title');
let author = document.getElementById('author');
let numPages = document.getElementById('numpages');
let status;

// event listeners
addBookButton.addEventListener('click', displayForm);
submitButton.addEventListener('click',handleAddBook)


let arrayBookShelf =[];
// let title,author,pageNumber;
function Book(){
    this.title = title.value;
    this.author = author.value;
    this.pageNumber = numPages.value;
    this.status = 'Read'
    return this.title,this.author, this.pageNumber, this.status;
}
Book.prototype.deleteFromArray =function (){ 
    const index = arrayBookShelf.indexOf(this);
    if (index !== -1) {
      arrayBookShelf.splice(index, 1);
      console.log('Book deleted');
    }
    return arrayBookShelf;
}
Book.prototype.readStatusArray = function(status){
    this.status = this.status === 'Read' ? 'Not Read' : 'Read';
}
// create, add and display books
function handleAddBook(e){
    e.preventDefault()
    addBookToArray();
    handleBookDisplay();
    hideForm();
    console.log('two');
}
function addBookToArray(){  
    const newBook = new Book;
    console.log(newBook);
    return arrayBookShelf.push(newBook);
}
function handleBookDisplay(){
    let book = document.createElement('div')
    const bookCover = document.createElement('div')
    const coverTitle = document.createElement('p');
    const coverAuthor = document.createElement('p');
    const phrase = document.createElement('p');
    const coverNumPages = document.createElement('p');
    let toggleReadButton = document.createElement('button')
    let deleteButton = document.createElement('button')
    // DOM classes
    book.classList.add('book');
    bookCover.classList.add('book_cover');
    coverTitle.classList.add('book_cover--title');
    coverAuthor.classList.add('book_cover--author');
    phrase.classList.add('book_cover--phrase');
    coverNumPages.classList.add('book_cover--pages');
    toggleReadButton.classList.add('toggle_read')
    toggleReadButton.classList.add('read');
    deleteButton.classList.add('delete_btn')
    // DOM arrangement
    book.appendChild(bookCover);
    book.appendChild(toggleReadButton);
    book.appendChild(deleteButton);
    bookCover.appendChild(coverTitle);
    bookCover.appendChild(phrase);
    bookCover.appendChild(coverAuthor);
    bookCover.appendChild(coverNumPages);
    uiBookShelf.appendChild(book);
    //DOM text content
    coverTitle.textContent = title.value;
    phrase.textContent = 'by';
    coverAuthor.textContent = author.value;
    coverNumPages.textContent = `Number of Pages : ${numPages.value}`;
    toggleReadButton.textContent = 'Read'
    deleteButton.textContent = 'Delete';
    // handle book event listeners
    toggleReadButton.addEventListener('click',handleToggleRead)
    deleteButton.addEventListener('click',removeFromDisplay);
    // handle book removal
    function removeFromDisplay(){
        uiBookShelf.removeChild(book);
    }
    // handleToggleRead
    function handleToggleRead(e){
    toggleReadButton.classList.toggle('nt-read')
    toggleReadButton.classList.toggle('read');
    if (e.target.className === 'toggle_read nt-read'){
        toggleReadButton.textContent = 'Not Read';

    }
    else{toggleReadButton.textContent = 'Read'}
    console.log(e)
    }


}
// handle modal form
function displayForm(){
    bookForm.style.display = "block"
}
function hideForm(){
    bookForm.style.display = "none";
    title.value = '';
    author.value = '';
    numPages. value = '';
}

