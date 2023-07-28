/*----------------------------------------------------------------------------------------------------------------------------
Question 3: 
Write printAnimals() in such a way that it prints all animals in the object below.
const animals = [ { species: 'Lion', name: 'King' }, 
{ species: 'Whale', name: 'Queen' } ]; 

function printAnimals(i) { 
this.print = function() { 
console.log('#' + i + ' ' + this.species + ': ' + this.name); 
} 
this.print(); 
}
------------------------------------------------------------------------------------------------------------------------------*/
const animals = [ { species: 'Lion', name: 'King' }, 
{ species: 'Whale', name: 'Queen' } ]; 

function printAnimals(i) { 
    this.print = function() { 
    console.log('#' + i + ' ' + this.species + ': ' + this.name); 
    }
    this.print()
}
//using for in for iterating through aray elements, and displaying number
//using .call to call prinAnimals function with respect to animals array of objects
for (let i in animals){
    printAnimals.call(animals[i],i)
}




/*----------------------------------------------------------------------------------------------------------------------------
Question 8: 
Create an object `calculator` with three methods: 
-`read()` prompts for two values and saves them as object properties with names `a` and `b` respectively. 
-`sum()` returns the sum of saved values. 
-`mul()` multiplies saved values and returns the result.
------------------------------------------------------------------------------------------------------------------------------*/
cal = {
    a: null,
    b: null,
    read: function(a,b){
        this.a=a;
        this.b=b;
    },
    sum: function(){
        return parseInt(this.a)+parseInt(this.b);
    },
    mul: function(){
        return this.a*this.b;
    }
}
cal.read(prompt("Enter first value: "), prompt("Enter second value: "))
console.log(cal.sum())
console.log(cal.mul())



  
/*----------------------------------------------------------------------------------------------------------------------------
Question 11: 
Write a JavaScript program to create a clock.
------------------------------------------------------------------------------------------------------------------------------*/
//##This Code is in html, js is written under script tag
<!DOCTYPE html>
<html>

<body onload="startTime()">

<h2>Clock</h2>

<div id="txt"></div>

<script> //js code begins
function startTime() {

  const today = new Date();
  let hours= today.getHours();
  let minutes= today.getMinutes();
  let seconds= today.getSeconds();

  am_pm= "AM"

//converting in 12 hour format
  if (hours>= 12) {
        if (hours> 12) {
        hours-= 12;
        am_pm= "PM";
        }
    } else if (hours == 0) {
        hours = 12;
        am_pm= "AM";
    }

//adding 0 in case of numbers from 1 to 9. When time is 1, we will get 01, and so on...
    hours= hours< 10 ? "0" + hours: hours;
    minutes= minutes< 10 ? "0" + minutes: minutes;
    seconds= seconds< 10 ? "0" + seconds: seconds;

//taking the format of displaying time in a variable    
    let currentTime = hours + ":" + minutes + ":" + seconds + " " + am_pm;
    document.getElementById('txt').innerHTML =  currentTime;
    setTimeout(startTime, 1000);
}
</script>   ///js code ends

</body>
</html>




/*----------------------------------------------------------------------------------------------------------------------------
Question 12: 
Make the following code work
[1, 2, 3, 4, 5, 6].shuffle();
------------------------------------------------------------------------------------------------------------------------------*/
Array.prototype.shuffle = function() {
    this.sort((a,b) => 0.5-Math.random());
    console.log(this);
  };

[1, 2, 3, 4, 5, 6].shuffle();
