let inputString = "((42, 43), (((25, 27), 22), 18))";

// Find the index of the first closing bracket
let firstClosingBracketIndex = inputString.indexOf(')');

// Split the string based on the first closing bracket
let firstPart = inputString.substring(1, firstClosingBracketIndex + 1); // Include the closing bracket
let secondPart = inputString.substring(firstClosingBracketIndex + 3, inputString.length - 1);



console.log("First part:", firstPart);
console.log("Second part:", secondPart);




// Find the index of the last comma
let lastCommaIndex = firstPart.lastIndexOf(',');

// Split the string based on the last comma
let firstPart2 = firstPart.substring(1, lastCommaIndex); // Exclude the comma
let secondPart2 = firstPart.substring(lastCommaIndex + 1,firstPart.length - 1);

console.log("First part2:", firstPart2);
console.log("Second part2:", secondPart2);


// Find the index of the last comma
let lastCommaIndex2 = secondPart.lastIndexOf(',');

// Split the string based on the last comma
let firstPart3 = secondPart.substring(1, lastCommaIndex2); // Exclude the comma
let secondPart3 = secondPart.substring(lastCommaIndex2 + 1,secondPart.length - 1);

console.log("First part3:", firstPart3);
console.log("Second part3:", secondPart3);

var obj = {
  "name": inputString,
  "d":5,
  "children": [{
      "name": firstPart,
    },
    {
      "name": secondPart,
    }
  ]
};


var newArray = [
   { "name": firstPart2}, 
   { "name": secondPart2}
];

var addElements = function(target, array) {
  obj.children.forEach(function(child) {
    if (child.name === target) {
      child['children'] = [...(child['children'] || []), ...newArray];
       console.log(child['children'])
      return;
    }
  });
};

addElements(firstPart, newArray);


console.log(obj);