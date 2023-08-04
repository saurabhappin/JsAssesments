/*----------------------------------------------------------------------------------------------------------------------------
Question 5: 
Extract the data from the API https://jsonplaceholder.typicode.com/users and print name, 
email id, phone number and company name from the extracted data.
------------------------------------------------------------------------------------------------------------------------------*/
async function f1(){
  //using try catch blocks for error handling.  
  try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //using fetch to get api, fetch returns promise
        const jsonData = await response.json();    //converting to json data format
        jsonData.filter((item)=>{                  //using .filter method of array to filter out data as required
        console.log(` Name: ${item.name}\n Email: ${item.email}\n Phone No.: ${item.phone}\n Company Name: ${item.company.name}\n`)
        })
    }
    catch(error){
        console.log("Error in fetching data "+error)
    }
}    
f1()


/*----------------------------------------------------------------------------------------------------------------------------
Question 9: 
Create a prototype of the reduce method.
------------------------------------------------------------------------------------------------------------------------------*/
//reduce takes two arguments: 
//1. callback fn.(mandatory) and 
//2. initialValue(optional)
Array.prototype.newReduce = function (callback, initialValue) {

  // If initialValue is given, then we assign its value to accumulator
  // If not, we assign first element of array to accumulator
  accumulator = !initialValue ? this[0] : initialValue;
  

  // Checking if initial value is given or not, if yes, then we'll start our iteration from 0
  //if Initial value is not given, we have element at 0th index in accumulator already
  //thus we will start iteration from 1 onwards
  let start = initialValue  ? 0 : 1;

  // Iterating over the array elements from the start index
  for (let i = start; i < this.length; i++) {
    
    // Calling the callback function
    //We know from the documentation, that this callback function takes 4 parameters
    //1.Accumulator; 2.Current element; 3.Index; 4.Array 
    accumulator = callback(accumulator, this[i], i, this);
  }

  // Returning the final accumulated value
  return accumulator;
}

//checking if our newReduce works fine
arr = [1,2,3,4,5,6,7,8,9]
console.log(arr.newReduce((acc,item)=>acc+item))
//Expected output = sum of all ements = 45
