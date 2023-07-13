//Question 9
-----------------------------------------------------------------------

let temp = "ppapp"
isPalindrome(temp)


//function to display the result to console
function isPalindrome(str){
    if(palindromeTest(str)){
        console.log("Given string is Palindrome")
    }
    else{
        console.log("Given string is not Palindrome")
    }
}

//function to check if string is palindrome
function palindromeTest(str){
    let end = str.length-1
    //applying for loop for half the string
    for(let i=0;i<end/2;i++){
        let front = str[i]
        let back = str[end-i]
        //comparing first character with last character
        if(front != back){
            //if any character is not matching it will be false
            return false;
        }
    //else it will be true
    return true;
    }
}


---------------------------------------------------------------------------
//Question 10
---------------------------------------------------------------------------

let arr = [10,20,30,40,10,30,50,10]
frequency(arr,arr.length)

//making a function, and using map for storing indices of array as keys, and in place of values of map, we will store number of occurences
function frequency(arr,n){
    let keyMap = new Map()
    for(let i=0;i<n;i++){
        //while updating key values in map, we will check if it already has the values or not
        if(keyMap.has(arr[i])){
            keyMap.set(arr[i], keyMap.get(arr[i])+1)
        }
        else{
            keyMap.set(arr[i], 1)
        }
    }
    //printing the result by printing values from array and occurences from map
    for(let i=0;i<n;i++){
        if(keyMap.get(arr[i]) != -1){
            console.log(arr[i] + " " + keyMap.get(arr[i]));
            keyMap.set(arr[i], -1)
        } 
    }
}


---------------------------------------------------------------------------
//Question 11
---------------------------------------------------------------------------

let arr =[1,5,7,3,8,3,3,3, 7, 8,0,7,6,3,9,7]
console.log(remDuplicates(arr))

//Making function and using array.filter function to remove duplicates when indices of two elements match
function remDuplicates(arr){
    return arr.filter((i, index) => arr.indexOf(i) === index);
}



---------------------------------------------------------------------------
//Question 12
---------------------------------------------------------------------------

  let arr =[1,5,7,3,8,3,3,3, 7, 8,0,7,6,3,9,7]
//for emptying we can simply make the length of the array as 0
arr.length = 0;
console.log(arr)

---------------------------------------------------------------------------
//Question 15
---------------------------------------------------------------------------
let str = "This is my sentence";
let output = reverseWords(input);
console.log(output);

  
  function reverseWords(str) {
  let words = str.split(" ");
  let reversedWords = words.map((word) => word.split("").reverse().join(""));
  return reversedWords.join(" ");
}




---------------------------------------------------------------------------
//Question 15
---------------------------------------------------------------------------

let str = "This is my sentence";
console.log(reverse(str));

//function to reverse individual words of the string  
function reverse(str) {
  //first we will split the words
  let tempStr = str.split(" ");
  
  //then we will reverse individual words by using split, reverse and join
  let reversedStr = tempStr.map((k) => k.split("").reverse().join(""));
  
  //finally, we will join the individual words together for the final output
  return reversedStr.join(" ");
}
