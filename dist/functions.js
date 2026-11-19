const Marks = [2, 4, 6, 8, 10];
function double() {
    const doubleNumber = Marks.map((event) => {
        return event * 2;
    });
    return doubleNumber;
}
const marksSheet = double();
console.log(marksSheet);
// Question 2: Convert numbers into squares
function convertSqure() {
    const numbers = [1, 2, 3, 4, 5];
    console.log(numbers);
    const SquredNumber = numbers.map((event) => {
        return event * event;
    });
    return SquredNumber;
}
const SquareData = convertSqure();
console.log("After Squared:- ", SquareData);
// Question 3: Convert names to uppercase
function makeUpperCase() {
    const names = ["nitesh", "rahul", "amit", "priya", "rohit"];
    console.log("Original Name: ", names);
    const updateName = names.map((event) => {
        return event.toUpperCase();
    });
    return updateName;
}
const nameUpdate = makeUpperCase();
console.log("After Update: ", nameUpdate);
// Add 5 to every number
function addNumner() {
    const numbers = [10, 20, 30, 40, 50];
    console.log("Before added number: ", numbers);
    const addNumber5 = numbers.map((event) => {
        return event + 5;
    });
    return addNumber5;
}
const addedNumber = addNumner();
console.log("After Added 5 for each: ", addedNumber);
// Question 5: Extract student names
function extractStudent() {
    const students = [
        { id: 1, name: "Nitesh", marks: 85 },
        { id: 2, name: "Rahul", marks: 70 },
        { id: 3, name: "Amit", marks: 90 },
        { id: 4, name: "Priya", marks: 95 },
    ];
    const mapped = students.map((event) => {
        return event.name;
    });
    return mapped;
}
const extractedName = extractStudent();
console.log("Extract student names:- ", extractedName);
// Question 6: Find numbers greater than 50
function findGreater() {
    const numbers = [10, 55, 30, 80, 45, 100, 65];
    const filtered = numbers.filter((event) => {
        return event > 50;
    });
    return filtered;
}
const updtaed = findGreater();
console.log(updtaed);
// Question 7: Find even numbers
function findEven() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNum = numbers.filter((event) => {
        return event % 2 === 0;
    });
    return evenNum;
}
console.log(findEven());
// Question 8: Find names having more than 5 characters
function findLongName() {
    const names = [
        "Amit",
        "Nitesh",
        "Rahul",
        "Priyanka",
        "Rohit",
        "Sandeep",
    ];
    const largestStr = names.filter((event) => {
        const nameChar = event.length;
        return nameChar > 5;
    });
    return largestStr;
}
console.log(findLongName());
// Question 9: Find students who passed || Passing marks: 40
function passedStudent() {
    const students = [
        { name: "Nitesh", marks: 85 },
        { name: "Rahul", marks: 32 },
        { name: "Amit", marks: 65 },
        { name: "Priya", marks: 28 },
        { name: "Rohit", marks: 75 },
    ];
    const passedStuds = students.filter((event) => {
        const passed = event.marks;
        return passed > 40;
    });
    return passedStuds;
}
console.log(passedStudent());
// Question 10: Find products below ₹1,000
function products() {
    const products = [
        { name: "Keyboard", price: 800 },
        { name: "Mouse", price: 500 },
        { name: "Monitor", price: 12000 },
        { name: "Headphones", price: 900 },
        { name: "Laptop", price: 50000 },
    ];
    const filterProduct = products.filter((event) => {
        const belowPrice = event.price;
        return belowPrice < 1000;
    });
    return filterProduct;
}
console.log(products());
// Reduce an array into a single accumulated result, such as a number, string, object, or another data structure.
function addedArray() {
    const numbers = [10, 20, 30, 40, 50];
    const added = numbers.reduce((sum, index) => {
        const reduced = sum + index;
        return reduced;
    });
    return added;
}
console.log("all number added:- ", addedArray());
// Question 12: Find the maximum number
function addNumber() {
    const numbers = [10, 85, 30, 100, 45, 60];
    const addedNum = numbers.reduce((sum, index) => {
        const allAdded = sum > index ? sum : index;
        return allAdded;
    });
    return addedNum;
}
console.log("*******", addNumber());
// Question 13: Count the total numbers
function countNumber() {
    const numbers = [10, 20, 30, 40, 55];
    const count = numbers.reduce((sum, index) => {
        const totalCount = sum + 1;
        return totalCount;
    }, 0);
    return count;
}
console.log("Total Count:- ", countNumber());
// Question 14: Calculate the total shopping price
function calculateTotalPrice() {
    const cart = [
        { name: "Keyboard", price: 800 },
        { name: "Mouse", price: 500 },
        { name: "Headphones", price: 1200 },
        { name: "USB Cable", price: 200 },
    ];
    const priceTotalPrice = cart.reduce((add, index) => {
        return add + index.price;
    }, 0);
    return priceTotalPrice;
}
console.log(calculateTotalPrice());
// Find all even numbers and calculate their total sum.
function addEvenNumber() {
    const numbers = [10, 15, 20, 25, 30, 35, 40];
    const evenNum = numbers.filter((event) => {
        const mapped = event % 2 === 0;
        return mapped;
    });
    const totalEvenNum = evenNum.reduce((acc, crnt) => {
        const total = acc + crnt;
        return total;
    });
    return totalEvenNum;
}
console.log(addEvenNumber());
// Question 18: Map and reduce First, double every number and then calculate the sum.
function calculateAllNumber() {
    const numbers = [1, 2, 3, 4, 5];
    const double = numbers.map((event) => {
        return event * 2;
    });
    const addedAfterDoule = double.reduce((acc, cuurenctValue) => {
        return acc + cuurenctValue;
    });
    return addedAfterDoule;
}
console.log(calculateAllNumber());
// Calculate the total price of products whose price is greater than ₹500.
function addAmountgreater500() {
    const products = [
        { name: "Mobile", price: 15000 },
        { name: "Mouse", price: 400 },
        { name: "Keyboard", price: 800 },
        { name: "Laptop", price: 50000 },
        { name: "Cable", price: 200 },
    ];
    const filteredAmount = products.filter((event) => {
        const greater500 = event.price > 500;
        return greater500;
    });
    const finalPrice = filteredAmount.reduce((acc, current) => {
        return acc + current.price;
    }, 0);
    return finalPrice;
}
console.log(addAmountgreater500());
export {};
