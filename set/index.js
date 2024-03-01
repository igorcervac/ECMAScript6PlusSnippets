let numberSet = new Set([1,3]);
numberSet.add(5).add(7);

let numberSet2 = new Set([2,4,8]);

console.group("odds");
numberSet.forEach(v => console.log(v));
console.groupEnd("odds");
console.log("odds size:",numberSet.size);

console.group("evens");
numberSet2.forEach(v => console.log(v));
console.groupEnd("evens");
console.log("evens size:",numberSet2.size);

console.group("intersection");
let intersectedSet = numberSet.intersection(numberSet2);
intersectedSet.forEach(v => console.log(v));
console.groupEnd("intersection");

console.group("union");
let unionSet = numberSet.union(numberSet2);
unionSet.forEach(v => console.log(v));
console.groupEnd("union");

const numbers = [1,1,2,2,2,4,5,5];
console.log("Initial numbers: ", numbers);
const uniqueNumbers = [...new Set(numbers)];
console.log("Unique numbers: ", uniqueNumbers);
