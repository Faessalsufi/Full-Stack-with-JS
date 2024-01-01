const myNumbers = [1, 2, 3];
const myTotal = myNumbers.reduce((acc, num) => {
  console.log(`acc: ${acc} and curr: ${num}`);
  return acc + num;
}, 0);

console.log(myTotal);
const shoppingCart = [
  {
    itemName: "Laptop",
    price: 999.99,
    quantity: 1,
  },
  {
    itemName: "Headphones",
    price: 49.99,
    quantity: 2,
  },
  {
    itemName: "Backpack",
    price: 39.95,
    quantity: 1,
  },
  {
    itemName: "Notebook",
    price: 4.99,
    quantity: 3,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => {
  return item.price + acc;
}, 0);

// console.log(totalPrice);
