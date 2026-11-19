let userName = "Nitesh Sharma";

console.log(typeof userName);
// JS
let marks = [12, 34, 54, 56, 76];
console.log(typeof marks);

// TS
let number: number[] = [12, 43, 54, 436, 53, 56, 43];
console.log(number);
const duble = number.map((event) => event * 2);
console.log(duble);

let user: Array<String> = ["Nitesh", "Mukesh", "Mithlesh"];
console.log(user);

const uppCase = user.map((event) => event.toLocaleUpperCase());
console.log(uppCase);

let result: number[] = [43, 56, 76, 45, 87, 56];
const afterFilter = result.filter((event) => {
  return event > 80;
});
console.log(afterFilter);

const StudNames: string[] = [
  "Nitesh",
  "Rahul",
  "Amit",
  "Rohit",
  "Priya",
  "Neha",
  "Ankit",
  "Sneha",
  "Vikas",
  "Ravi",
  "Pooja",
  "Arjun",
  "Karan",
  "Simran",
  "Deepak",
];

const filterName = StudNames.filter((event) => {
  return event.startsWith("N");
});
console.log("Filtered Name: ", filterName);

let price: Array<number> = [200, 400, 700];

let totalPrice = price.reduce((sum, price) => {
  return sum + price;
});
console.log(totalPrice);
