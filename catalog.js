// Catalog.js

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "book1.jpg", file: "books1.pdf", available: true },
  { title: "To Kill a Mockingbird", author: "Harper Lee", image: "book2.jpg", file: "books2.pdf", available: true },
  { title: "1984", author: "George Orwell", image: "book3.jpeg", file: "books3.pdf", available: true },
  { title: "Moby Dick", author: "Herman Melville", image: "book4.jpeg", file: "books4.pdf", available: false },
  { title: "The Alchemist", author: "Paulo Coelho", image: "book5.jpeg", file: "books5.pdf", available: true },
  { title: "Harry Potter", author: "J.K. Rowling", image: "book6.jpeg", file: "books6.pdf", available: true },
  { title: "Pride and Prejudice", author: "Jane Austen", image: "book7.jpeg", file: "books7.pdf", available: false },
  { title: "The Hobbit", author: "J.R.R. Tolkien", image: "book8.jpeg", file: "books8.pdf", available: true },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", image: "book9.jpeg", file: "books9.pdf", available: true },
  { title: "The Book Thief", author: "Markus Zusak", image: "book10.jpeg", file: "books10.pdf", available: true }
];

const container = document.getElementById("books-container");
const notFound = document.getElementById("not-found");

// Get search query from URL
const params = new URLSearchParams(window.location.search);
const searchQuery = params.get("search")?.toLowerCase();

// Function to display books
function displayBooks(list) {
  container.innerHTML = "";
  list.forEach(book => {
    const div = document.createElement("div");
    div.classList.add("book-card");
    div.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>by ${book.author}</p>
      <p>${book.available ? "Available ✅" : "Not Available ❌"}</p>
    `;

    div.addEventListener("click", () => {
      if(book.available){
        window.open(book.file, "_blank");
      } else {
        alert("Sorry, this book is not available 😔");
      }
    });

    container.appendChild(div);
  });
}

// Show filtered books based on search query
if(searchQuery) {
  const result = books.filter(b => b.title.toLowerCase().includes(searchQuery));
  if(result.length > 0){
    notFound.style.display = "none";
    displayBooks(result);
  } else {
    container.innerHTML = "";
    notFound.style.display = "block";
  }
} else {
  // If no query, show all books
  displayBooks(books);
}

// View all books button
function showAllBooks(){
  notFound.style.display = "none";
  displayBooks(books);
}