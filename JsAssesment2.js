---------------------------------------------------------------------------------------------------------------------------
Question 8:
___________________________________________________________________________________________________________________________

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
