// function electronic(data: string | number) {
//   if (typeof data === "string") {
//     console.log(data.toUpperCase());
//   } else {
//     console.log(data);
//   }
// }
// electronic("Nitesh");

// // intersections

// type user = {
//   userName: string;
// };

// type admin = {
//   permission: string[];
// };

// type staff = user & admin;

// let combined: staff = {
//   userName: "Nitesh",
//   permission: ["read", "write"],
// };

// console.log(combined);

// function addNumber(){

// }

// Overloading
// function add(a: number, b: number): number;

// function add(a: any, b: any) {
//   return a + b;
// }

// console.log(add(10, 20));

// interfacae or Object
interface Employee {
  readonly id: number;
  name: string;
  salary: number;
}

let employee: Employee = {
  id: 123,
  name: "Nitesh Sharma",
  salary: 45000,
};

let student: Employee = {
  id: 765,
  name: "Nitesh KUmar Sharma",
  salary: 65000,
};

console.log(student);
console.log(employee);
