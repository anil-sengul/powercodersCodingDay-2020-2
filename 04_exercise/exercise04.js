//Creating an array which is consist of book objects.
var books = [
  {
    name: "The Most Human Human",
    price: 15.0,
    isSold: true,
  },
  {
    name: "Scrum: The Art of Doing Twice the Work in Half the Time",
    price: 20.0,
    isSold: false,
  },
  {
    name: "The ONE Thing",
    price: 32.0,
    isSold: true,
  },
];

//Constructor of book object.
function book(name, price, isSold) {
  this.name = name;
  this.price = price;
  this.isSold = isSold;
  this.addBook = function () {
    books.push(this);
  };
}

//Sorting the books.
books.sort((a, b) => (a.name > b.name ? 1 : -1));

let unorderedList = document.createElement("ul");
document.getElementsByTagName("main")[0].appendChild(unorderedList);
books.forEach((element) => {
  let { name, price, isSold } = element;

  let listItem = document.createElement("li");
  let item1 = document.createElement("span");
  let item2 = document.createElement("span");

  item1.textContent = name;
  item2.textContent = price;

  listItem.appendChild(item1);
  listItem.appendChild(item2);
  unorderedList.appendChild(listItem);
});
let deneme = unorderedList.lastElementChild;
