function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var myLibrary = ['A Walk To Remember', 'Green Dragon, White Tiger', 'Cry Wolf'];

function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read;
  this.novel = function (){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
  }
};


