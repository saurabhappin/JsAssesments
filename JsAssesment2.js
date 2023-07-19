/*---------------------------------------------------------------------------------------------------------------------------
Question 4: How do we check if a key exists in a JavaScript object?
-----------------------------------------------------------------------------------------------------------------------------*/

obj = {key1:"v1",
    key2: "v2",
    key3: undefined,
    key4: null
}

//using "in" to check for key in object
console.log("key4" in obj) //true

/*---------------------------------------------------------------------------------------------------------------------------
Question 8: Remove Duplicate Items from Array using reduce function.
-----------------------------------------------------------------------------------------------------------------------------*/

//taking a random array
arr = [1,2,4,6,7,9,1,2,3,9,6,3,3,6,8,3,2,6,6,9, 7,8,0,1,2,4]

//Using reduce function, and taking its value in a variable(result) to console log later
const result = arr.reduce((acc,curr)=>{
    
    //Using includes to search in the whole array for that current item
    if(!acc.includes(curr)){
        
        //pushing the current item in accumulator array if the item does not exist
        acc.push(curr)
    }
    
    //returning acc array with unique values
    return acc
    
},[])

//displaying the result
console.log(result)




/*---------------------------------------------------------------------------------------------------------------------------
Question 9: Sort an array of strings by length.
-----------------------------------------------------------------------------------------------------------------------------*/

input = ["Testing", "The", "Code"]

//Using array sort function to sort by length
console.log(input.sort((a,b) => a.length - b.length))




/*---------------------------------------------------------------------------------------------------------------------------
Question 10: Write a JavaScript function to check whether an `input` is an array or not.
-----------------------------------------------------------------------------------------------------------------------------*/
//taking multiple inputs
a = [1,3,5,7,3,24,467,6,734,225,64]
b = ["a","g","h","l","m"]
c = "Saurabh Srivastava"
d = {}
e = []

//Making a function using instanceof, that checks if the given input
//array or not, and displays true/false acoordingly
const isArray = (arr) => (console.log(`Given input is an array: ${arr instanceof Array}`))

//Calling funtion on each of then inputs to get the desired result
isArray(a)
isArray(b)
isArray(c)
isArray(d)
isArray(e)




/*---------------------------------------------------------------------------------------------------------------------------
Question 11: Write a JavaScript function to sort the following array of objects by title value.
-----------------------------------------------------------------------------------------------------------------------------*/

//Given input
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} ];

//Using array sort method to sort by title
console.log(library.sort((a,b)=>  (a.title>b.title) ? 1 : -1 ))






/*---------------------------------------------------------------------------------------------------------------------------
Question 12: Write a program to derive the provided output:-
Input: var arrOfObj=[{name: 'Rohan', physics: 20, chemistry: 18, math: 26}, {name: 'Geeta', physics: 29, chemistry: 30, math: 22}, {name: 'Kunal', physics: 27, chemistry: 25, math: 21}, {name: 'Abhishek', physics: 21, chemistry: 26, math: 23}, {name: 'Aashish', physics: 25, chemistry: 16, math: 18}];
Output: { Rohan: 64, Geeta: 81, Kunal: 73, Abhishek: 70, Aashish: 59 }
-----------------------------------------------------------------------------------------------------------------------------*/

//Given Array of Objects
const arrOfObj=[ 
                {name: 'Rohan', physics: 20, chemistry: 18, math: 26}, 
                {name: 'Geeta', physics: 29, chemistry: 30, math: 22}, 
                {name: 'Kunal', physics: 27, chemistry: 25, math: 21}, 
                {name: 'Abhishek', physics: 21, chemistry: 26, math: 23}, 
                {name: 'Aashish', physics: 25, chemistry: 16, math: 18}];

//Using Array.reduce method to add marks of all subjects. Here we are
//taking accumulator(acc) as an object, because we want the result to be object.
const result = arrOfObj.reduce((acc,curr)=> {
    acc[curr.name] = curr.physics + curr.chemistry + curr.math
    return acc;
},{});

console.log(result);





/*---------------------------------------------------------------------------------------------------------------------------
Question 13: Write a JavaScript function to filter false, null, 0 and blank values from an array.
-----------------------------------------------------------------------------------------------------------------------------*/

//Given Array
arr = [“Test”, true, null, false, 0]

//Using array.filter method to filter out falsive values
//filter method creates a new array which we display to the console
console.log(arr.filter((item)=> (!!item)))




/*---------------------------------------------------------------------------------------------------------------------------
Question 14: Write a JavaScript program to count the number of arrays inside a given array.
-----------------------------------------------------------------------------------------------------------------------------*/

arr = [2,8,[6],3,3,5,3,4,[5,4]]

//taking this variable for counting the number of arrays
let count = 0

//Using forEach to go over each element of array
arr.forEach(item => {
    
    //checking that if the element is an array or not using isArray method
    if(Array.isArray(item)){
        count++
    }
})

//Output
console.log(count)
