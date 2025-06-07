// Task 5: Find the index of "locate" in the given string
const str = "Please locate where 'locate' occurs!";
const firstIndex = str.indexOf("locate");
const lastIndex = str.lastIndexOf("locate");

console.log(`First occurrence of "locate": index ${firstIndex}`);
console.log(`Last occurrence of "locate": index ${lastIndex}`);

// If you want to find all occurrences using a loop:
let indices = [];
let pos = str.indexOf("locate");
while (pos !== -1) {
  indices.push(pos);
  pos = str.indexOf("locate", pos + 1);
}
console.log(`All occurrences of "locate" at indices: ${indices}`);
