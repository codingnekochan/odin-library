//DOM elements
const addBookButton = document.getElementById('create-book-button');
const bookForm = document.querySelector('.modal-form');
const submitButton = document.getElementById('add-book');
const uiBookShelf = document.querySelector('.book_shelf');
let title = document.getElementById('title');
let author = document.getElementById('author');
let numPages = document.getElementById('numpages');

// event listeners
addBookButton.addEventListener('click', displayForm);
submitButton.addEventListener('click',handleAddBook)


let arrayBookShelf =[];
// let title,author,pageNumber;
function Book(){
    this.title = title.value;
    this.author = author.value;
    this.pageNumber = numPages.value;
    return this.title,this.author, this.PageNumber;
}
Book.prototype.deleteFromArray =function (){ 
    for(let i= 0; i< arrayBookShelf.length; i++){
        if (arrayBookShelf[i] === this){
            arrayBookShelf.splice(i, 1);
        }
    }
    return arrayBookShelf;
}

// create, add and display books
function handleAddBook(e){
    e.preventDefault()
    addBookToArray();
    handleBookDisplay();
    hideForm();
    console.log('two');
}
function createNewBook(){
        const newBook = new Book;
        console.log(newBook);
        return arrayBookShelf.push(newBook);
}
function handleBookDisplay(){
        arrayBookShelf.forEach((newbook)=>{
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
            toggleReadButton.classList.add('toggle_read');
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
            deleteButton.textContent = 'Delete';
            // handle book removal from array and display
            deleteButton.addEventListener('click', ()=>{
                newbook.deleteFromArray()
                removeFromDisplay();

            })
            // 
            function removeFromDisplay(){
                uiBookShelf.removeChild(book);
            }
        })
        
}
function addBookToArray(){
    const noBook = document.querySelector('.no_book')
    const alertMessage = document.createElement('p');
    noBook.appendChild(alertMessage);
    alertMessage.classList.add('no_book--alert'); 
    if(!title.value || !author.value || !numPages.value){
         return alertMessage.textContent = 'Please Enter a Book!';  
    }
    else{      
        createNewBook()
    }
}

// toggle read

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

