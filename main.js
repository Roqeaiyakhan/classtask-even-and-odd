
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = [];
const oddNumbers = [];

numbers.forEach(number => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }
});

alert("Even Numbers: " + evenNumbers.join(", "));
alert("Odd Numbers: " + oddNumbers.join(", "));

