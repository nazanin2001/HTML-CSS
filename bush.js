
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length)


var newString = myString.replace(/,/g, " ");
console.log(newString)

//Q2 ARRAY
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];


favoriteAnimals.push('turtle');
console.log(favoriteAnimals)


let arr = favoriteAnimals.splice(1, 0, "meerket");


console.log("My array new value will be 5 since i have add new element in the array")


console.log(favoriteAnimals)
console.log('The array has a length of: ' + favoriteAnimals.length)


let arr2 = favoriteAnimals.splice(3, 1,);
console.log(favoriteAnimals)


var index = favoriteAnimals.indexOf("meerket")
console.log('The item you are looking for is at index: '+ index)

//Q1 MORE JAVASCRIPT
function adder(a, b, c){
  return(a+b+c);
}
adder(3, 4, 5)

//Q2
function colorCar(color) { 
  console.log(color);
}
colorCar('a red car');

//Q3
Person = {
  id: 1,
  name: "nazanin",
  age: 18,
  dob: "30/08/2000",
  address: "greece"
}
console.log(Person)


//Q4
var color = "blue";
var car = 1;
var motorbike = 2;

function vehicleType(color, car){
  if (car === 1){
    console.log('a '+color +' car');
  }
  else{
    console.log('a ' + color +' motorbike');
  } 
}
vehicleType("blue", 2)

//Q5
console.log(3 === 3 ? "yes" : "no")


//Q6
var color = "blue";
var car = 1;
var motorbike = 2;
var age = 5;
function vehicle(color, car, age){
  if (age <= 5){
    console.log('a '+color +' used car');
  }
  else{
    console.log('a ' + color +' used motorbike');
  } 
}
vehicle("blue", 1, 5)

//Q7
var Array1 = ["benz", "IQ", "sport", "bike"];
console.log(Array1)

//Q8
console.log(Array1[3])

//Q9
var color = "blue";
var car = 1;
var motorbike = 2;
var age = 5;
function aListOfCars(color, car, age){
  if (age < 1){
    console.log('a '+color +' used car');
  }
  else{
    console.log('a ' + color +' new bike');
  } 
}
aListOfCars("green", 3, 2)

//Q10
var cars = ["motorbikes", "caravans", "bikes", "Ford"];
var i = 2;
var len = cars.length;
var text = "Amazing Joe's Garage, we service cars,";
console.log(text + cars)

//Q11
cars.push("RangeSport");
console.log(text + cars)

// Q12 // empty object
let object = {

}

// Q13-14
let teachers = {
  Zohir: 'Htmlcss',
  mohammad: 'JavaScript',
  yannis: 'Javascript'
}
console.log(teachers)

// Q 15
let x = [1,2,3];
    let y = [1,2,3];
    let z = y;
   x == y,

    console.log(x == y) // false
    console.log(x === y) // false
  console.log(z == y)  // true
  console.log(z == x)  //false

  // Q 16
  let o1 = { foo: 'bar' };
  let o2 = { foo: 'bar' };
  let o3 = o2;

  o2 = { foo: 'that' };
  o1 = { wooow: 'bar' };

  console.log(o1);
  console.log(o2);
  console.log(o3);

  console.log("The o1 and o2 changes doesn't matter")


  let bar = 42;
  typeof typeof bar; // it returns 'string'