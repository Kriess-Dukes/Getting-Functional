//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE




/*
1. Male Count

Write a function that counts the number of males in 
the customer object and return the number of males 
in the customers list.


**HINT: Look at the data in the customer.json file. 

* What kind of loop should you use to iterate over 
the customers array?

* What data type occupies each element of the 
customers array? What type of loop should be used 
then?


*/

function maleCount(array){
 for(var i = 0; i <= array.length-1; i++){
    //comsole.log(i, array[i])
    if(=== 'male'){
       
    }
 }
};


var numOfMales = array.filter((customerObj) => {
  return customerObj.gender === 'male'
}).length
return numOfMales
};

console.log(male(customers))

/*
2. Female Count

Write a function that counts the number of females in 
the customer object and return the number of 
females in the customers list.


**HINT: Look at the data in the customer.json file. 

* What kind of loop should you use to iterate over 
the customers array?

* What data type occupies each element of the 
customers array? What type of loop should be used 
then?

*/

function femaleCount(array){
 for(var i = 0; i <= array.length-1; i++){
    //comsole.log(i, array[i])
    if(=== 'female'){
       
    }
 }
};

var numOfFemales = array.filter((customerObj) => {
  return customerObj.gender === 'female'
}).length
return numOfFemales
};

console.log(female(customers))
