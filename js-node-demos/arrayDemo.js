// /0/ Array console log
const items = [1, 2, 3];
console.log("/0/", items);
// [ 1, 2, 3 ]
console.log("/0/", ...items);
// 1 2 3

// /1/ Array length
console.log("/1/", items.length);
// 3

// /2/ Array copy & element manipulation
const itemsCopy = [...items];
itemsCopy[2] = 10;
console.log("/2/", items);
// [ 1, 2, 3 ]
console.log("/2/", itemsCopy);
// [ 1, 2, 10 ]

// /3/ Add element to end of array
const itemsCopy2 = [...items];
itemsCopy2.push(4);
console.log("/3/", itemsCopy2);
// [ 1, 2, 3, 4 ]

// /4/ Iterate array through with callback
const itemsInc = items.map((item) => item + 1);
console.log("/4/", itemsInc);
// [ 2, 3, 4 ]

// /5/ Add element (array) to end of array
const itemsCopy3 = [...items];
itemsCopy3.push([...items]);
console.log("/5/", itemsCopy3);
// [ 1, 2, 3, [ 1, 2, 3 ] ]

// /6/ Get subsequent of array - from/to - zero based
const itemsPart = items.slice(0, 2);
console.log("/6/", itemsPart);
// [ 1, 2 ]

// /7/ Removes first element from array
const itemsCopy4 = [...items];
const itemsPart2 = itemsCopy4.shift();
console.log("/7/", itemsPart2);
console.log("/7/", itemsCopy4);
// 1
// [ 2, 3 ]

// /8/ Removes elements from array - startIdx/deleteCount - zero based
const itemsCopy5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const itemsPart3 = itemsCopy5.splice(3, 3);
console.log("/8/", itemsPart3);
console.log("/8/", itemsCopy5);
// [ 4, 5, 6 ]
// [ 1, 2, 3, 7, 8, 9 ]

// /9/ Covert array-like object to array
const arrLike = { 0: "foo", 1: "bar", 2: "baz", length: 3 };
const arr = Array.from(arrLike);
console.log("/9/", arr);
// [ 'foo', 'bar', 'baz' ]
