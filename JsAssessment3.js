/*----------------------------------------------------------------------------------------------------------------------------
Question 5: 
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
let item = ["Egg", 0.25, 12]; 
let name = item[0]; 
let price = item[1]; 
let quantity = item[2]; 
console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`); console.log(); 
------------------------------------------------------------------------------------------------------------------------------*/

let item = ["Egg", 0.25, 12]; 

//Using destructuring
const[name,quantity,price] = item;
console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`)


//Another Way using spread operator & function

//making a function to display values
function display(name, quantity, price){
    console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`) 
}
//calling the function using 
display(...item);




/*----------------------------------------------------------------------------------------------------------------------------
Question 6: 
Using Array Destructuring get all of the names from this Nested Array
const moreStudents = [ 'Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam'] ]; 
// Write your code here 
const [] = moreStudents; 
console.log(student1, student2, student3, student4, student5);
------------------------------------------------------------------------------------------------------------------------------*/
const moreStudents = [ 'Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam'] ]; 

// using destructuring
const [student1,[student2,student3],[student4,student5]] = moreStudents; 
console.log(student1, student2, student3, student4, student5);




/*----------------------------------------------------------------------------------------------------------------------------
Question 7: 
Fix the code to make it work.
let map = new Map(); 
map.set("key", "value"); 
let keys = map.keys();
keys.push("more");
------------------------------------------------------------------------------------------------------------------------------*/

let map = new Map(); 
map.set("key", "value");
let keys = map.keys();

keys = Array.from(keys); //doing this because keys is Map iterator and not an array, hence for performing push() in keys, we will have to convert into an array.

keys.push("more")
console.log(keys)



/*----------------------------------------------------------------------------------------------------------------------------
End
------------------------------------------------------------------------------------------------------------------------------*/
