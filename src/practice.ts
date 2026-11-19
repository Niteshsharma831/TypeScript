// Declare variables for name, age, email and isActive using appropriate TypeScript types.

// Question 2 Write a function that adds two numbers with explicit parameter and return types.

function add(num1: number, num2: number) {
  return num1 + num2;
}
console.log(add(12, 23));

//Create a function that checks whether a number is even or odd.
function checkedEvenOrOdd(num: number) {
  if (num % 2 === 0) {
    console.log(num, "is a Even Number");
  } else {
    console.log(num, "is a Odd Number");
  }
}

console.log(checkedEvenOrOdd(10));

// Write a function to find the largest of three numbers.
function largestNumber(a: number, b: number, c: number): number {
  if (a >= b && a >= c) {
    console.log(a, "is greater number");
    return a;
  } else if (b >= a && b >= c) {
    console.log(b, "is greater number");
    return b;
  } else {
    console.log(c, "is greater number");
    return c;
  }
}
largestNumber(12, 43, 56);

// Create a function that reverses a string.

function reverseStr(str: string): string {
  const reversed = str.split("").reverse().join("");
  console.log(reversed);
  return reversed;
}
reverseStr("Nitesh");

// Write a function to count vowels in a string.
function countVowel(str: string): number {
  let count = 0;
  for (let char of str.toLocaleLowerCase()) {
    if ("aeiou".includes(char)) {
      count++;
    }
  }
  console.log(count);
  return count;
}
countVowel("Nitesh");

// Create an array of 10 numbers and print only even numbers.
function findEvenNumber(): number[] {
  const marks: number[] = [12, 43, 23, 45, 65, 34, 23, 12, 43, 56, 76, 65];

  const evenNumber = marks.filter((event) => {
    return event % 2 === 0;
  });
  return evenNumber;
}
console.log(findEvenNumber());

// Find the sum of all numbers in an array.
function addAllArray(): number {
  let price: number[] = [12, 34, 65, 45, 76, 45, 23, 54];

  const addedPrice = price.reduce((acc, currentValue) => {
    return acc + currentValue;
  });
  return addedPrice;
}

console.log(addAllArray());

// Find the maximum and minimum number in an array.

function findlargestNum(): number {
  let num: number[] = [12, 43, 54, 67, 87, 56, 43, 45];
  let largestNum = num[0];
  let smallestNum = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > largestNum) {
      largestNum = num[i];
    }
  }

  for (let i = 0; i > num.length; i++) {
    if (num[i] > smallestNum) {
      smallestNum = num[i];
    }
  }
  console.log("Largest Number: -", largestNum);
  console.log("Smallest Number: -", smallestNum);
}

findlargestNum();
