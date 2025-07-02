console.log('hello world')

// single line comments
/**
 * use comments as reminders
 * multiline comments 
 * be consise e.g adds to numbers
*/

// variables and data types
// var is unit of storages


// old school 
var name = 'spencer'

// new school and prefared
let mutable ='This can change'


const imutable = 'This cannot change'


// datatypes diff type of containers that hold diff type of info 2 types primitive and complex

/*
primitive are the building blocks of data types 
1. numbers - whole and decimal
2. strings - sequences of characters enclosed in quotes
3. boolean - true or false 
4. Null - absense of a value 
5. Undefined - var has been declared but value has not yet been given to it
6. Symbol - they are unique and imutable identifiers used in advanced js
*/

// symbol 
const id = Symbol('dad')


/*
complex data types 
objects - a collection of related data


arrays - a special type of obj that store ordered lists 

const names = ['ama', 'esi']
*/


// use typeof to id the datatype


// Nan - not a number it occurs when u try to perform an invalid math operation


// if u want to set value just use null not undefined

// undefined is the default value for uninitialized vars and it should be assigned by js not the programmer

// type of null is object, type of undefined is undefined

// object - the previous vars are called primitive because they can only contain 1 type of data but object can contain various types of data - they are used to group diff vars together 


const person = {
    name:'spencer',
    age:10
}

// to extract 
console.log(person.name)


/*
staticly typed lang is one where the type of each var and expression is determined at compilled time

so once a var is assigned a specific datatype it cant store values of other datatype c c++ or java


dynamic the type of each var is determined at runtime so types can be changed at anytime
 */


/*
javascript operators
1 + 2 

1,2 is the operand
+ is the operator 

arithmetic operators +, -, *, /


compaison & equality 
=, ===, ==, <, >, <=, =<


assignment operator = 


conditional tenary operator 
a?b :c


remainder

10 % 3 = 1

exponent 
3**3

increment
value++

decrement
value--


strict equality 
===
compares values and types

loose equality 
== 
compares the values but ignore types



!= 
not equal 

!== 
not equal strict

always use triple equals sign ===


logical operators 
and, or, not

&& - and 
|| - or 

! - not



assingment operators
it assign a value to the value by the = sign 
+=, -=, *=, /=
*/

let age = 20 

if (age === 20){
    console.log('u can enter')
} else {
    console.log('get out of here')
}


// truthy and falsy values

/*
falsy values 
1. false 
2. 0
3. "" - empty string
4. null
5. undefined
6. Nan

empty array is not falsy

truthy - all values that are not falsy

to check truthy 
if(conditon to check){
console.log(truthy value)
}
*/


const ages = 21 

const isCool = true 

if (age > 18 && isCool){
    console.log('new may enter')
} else {
    console.log('can now enter')
}


// && examines left to right
console.log('truthy' && 1 && 'test' && 999) 
// would return 999 because it evaluate from left to right if the value is true it moves to the next one till we reach the last value but if its meets a false value it returns it it returns the first falsy value


// or checks if any of the operands is a truthy value
console.log('truthy' || 1 || 'test' || 999) 
// it returns the first truthy value that matches but if not truthy value is found it returns the last one


// not !

// console.log(!true) false
// console.log(!false) true


// figuring out if a value if truthy or falsy
/*
1. if statement  if it moves to the next block of it then u know if its truthy or falsy based on the values recommended 

2. NOT ! 

!! it converts the value to it true boolean type
!! - double negation gives of a truthy value give u true
!! - a double negation of a falsy value gives u false 

!!true 


but the best way is to use the boolean class
console.log(Boolean('TEST'))
console.log(Boolean(undefined))
*/

// switch statement


const age1 = 23 


switch (age1) {
    case 30:
        console.log('u can marry')
        break;
    case 10:
        console.log('focus on school')
        break;

    default:
        console.log('dont marry now')
        break;
}

// tenary operator

// question ? 'true':'false'


// for loop 
// for ([initialization]; [condition]; [final-expression]){
// console.log('block of code')
// }

for (let i = 0; i< 10; i++){
    console.log(i)
}


// while loops

// while (condition){}

let i = 0;
while(i<10){
    console.log(i)
    i++
}

// function declaration
function square(number){
    return number*number
}


// function call
square(5)


console.log(square(10))

// function expression 
let names = function(name){
    console.log(name)
}


names('spencer')


// anonymous function
let name1 = function(name){
    console.log(`anonymous function calling ${name}`)
}


// arrow function

const name2 = (name) => console.log(name)

// parameteres - they are call parameters when used in a function declaration 

// arguments - they are called arguments when used in a function call or passed to a function


/*
naming converstion
clearly define what the function does
use action words
e.g sendEmail, getUser
easy to read
be consistent in naming converstion
use camel case for naming getUserName
function names should be short and descriptive

prefix based on use 

getUserProfile 
fetchOrders

updateProfile
setTheme
modifyCard

if the function return a boolean 
it the function name should begin with 
is
can
has
should

*/


/*multiline strings `1
2
3
4`;

use double \\ to escape certain characters*/


/*
string methods
toLowerCase()
toUpperCase()

startsWith()
endsWith()
includes('spl') - returns if the item is in string

str.lastIndexOf('ducks') - returns indexOf search end to beginning

if it returns -1 it item not found
to get a substring
string.slice(start, end)

split - turn a sting to an array
let dogName = 'scooby'
dogName.split(' ')
becomes ['s', 'c', 'o', 'o', 'b', 'y']
*/ 


/* 
reverse a string
const exampleString = 'test'
const reversedString = exampleString.split('').reverse().join('')

results
tset


to repeat something

const dogSays - 'woof'
console.log(dogSays.repeat(5)) //woofwoofwoofwoofwoof


trim to remove extra spaces
const str = "           Hello World!        "
console.log(str.trim())
"Hello World!"
*/

const guestList = 'Our guests are: emma, jacob, isabella, ethan';

const length = guestList.length
console.log(guestList.length)

const uppercaseGuestList = guestList.toUpperCase()
console.log(uppercaseGuestList)


const isEthanOnTheList = uppercaseGuestList.includes('ETHAN')
console.log(isEthanOnTheList)


const substringGuests = uppercaseGuestList.slice(15)
console.log(substringGuests)


const arrayOfGuestList = uppercaseGuestList.split(', ')
console.log(arrayOfGuestList)


// arrays js
/*
used to store and ordered collection of objects
u assess elem with index system
*/

const workNames = ['spencer', 'edith', 'gloria', 'andrea']

const months = ['Jan', 'Feb', 'Mar', 'Apr']


// to replace elements 
months[2] = 'Aug'

// to add a new elem to the end 
months[months.length] = 'Sept'

console.log(months)

// it can store a diff type of elem 

const arr = [
    'Apple',
    1,
    {name:'spl'},
    true,
    function(){
        console.log('hello')
    }
]

// loop thru arrays 
for (let i = 0; i < months.length; i++){
    console.log(months[i])
}


/*
array.push(value) - to add new values
array.pop() - to remove the last value and return it 
array.shift() - to remove the first elem of an array and return it
array.unshift() - add a value to the start of an array and return the new list
array.slice(startIndex, endIndex) - create a new array with start and end index
array.splice(start, deleteCount, ...items) add and remove elems from any position in the array 
arrays.splice(2,0, 'jenny') - insert jenny at position 2 index 
*/
console.log(months)
// the delete count starts counting from when the new item is inserted
let splicedMonths = months.splice(2,0, 'jenny')
console.log(months)

// advanced methods
// concat(...items)

let moreMonths = ['june', 'july']

let totalMonths = months.concat(moreMonths)


// indexOf looks for an item starting positon and returns -1 if nothing is found 
totalMonths.indexOf('july')



// includes - returns true of false based on item in array 
months.includes('june')


// find(func) - it returns the first occurance specifed in the array - returns undefined if name not found
const foundName = workNames.find(name=> name.startsWith("g"))
console.log(foundName)


// filter(func) - it filters according to the condition specifed
const filteredName = workNames.filter(name=> name.length > 5)
console.log(filteredName)

// findIndex(func) - works like func but returns index instead
const foundIndexOfName = workNames.findIndex(name=> name.startsWith("g"))
console.log(foundIndexOfName)


// forEach(func) - calls the func for the element but does not return anything
const newNames = workNames.forEach(name => console.log(name))
console.log(newNames)


// map(func) - hits every elem in the array and returns a new array
const newNames1 = workNames.map(name=> name.toLowerCase())
console.log(newNames1)


// sort(func) - sorts the array in place and returns it
workNames.sort()
console.log(workNames)

// reverse(func) - reverse the array in place and returns it
workNames.reverse()
console.log(workNames)

// split(by) - convert string to array 
const str = "apple,banana,cherry"
const fruits = str.split(',')
console.log(fruits)



// join(by) - converts an arry to string 
const fruitString = fruits.join(", ")
console.log(fruitString)


// reduce(func, initialValue) - calc a single value over the array by calling func for each elem 
const numbers = [1,2,3,4,5]
const sum = numbers.reduce((acc,num) => acc + num)
console.log(sum)


// some(func) - returns true if any elem passes the test implemented by func
const hasShortName = workNames.some(name => name.length < 4)
console.log(hasShortName)


// every(func) - returns true if all elems pass the test
const hasLongName = workNames.every(name => name.length > 4)
console.log(hasLongName)



// fill(value, start, end) - fill the array with a repeating value from the start to end index specified
const filledArray = new Array(3).fill('Hello')

console.log(filledArray)


// array.forEach((value, index) => {})


// to use the named function as a callback function 
function logArrayElement(element, index) {
    console.log(index, element)
    
}

workNames.forEach(logArrayElement)


/*
it does not return a value so cant be used when u want chain other methods
use when 
the callback function is to be executed on every single elem on the array

used to improve performance when the first condition is satisfied


dont use when 
when u want to stop or break a loop when the condtion is true
the callback function is async instead use the standard loop
*/

// map returns a new array and iterates over each elem

// find returns the first matching elem in an array
const games = ['football', 'hockey', 'rugby', 'tenis', 'golf']
const findGolf = games.find(game => game === 'golf') 
console.log(findGolf)


// includes - checks if an array contains a certain value and returns true on the first instance of finding the item and false if not found

console.log(games.includes('hockey'))


// sort - it sorts in ascending order
// when used without a comparison function on numbers it converts then to strings and sorts
games.sort()
console.log(games)

// so to sort numbers
let sortedNumbers = [12,3,5,6,2,4,1]
let sortedNumbers1 = [12,3,5,6,2,4,1]
// ascending order
sortedNumbers.sort((a,b) => a - b)

// descending order
sortedNumbers.sort((a,b) => b - a)



console.log(sortedNumbers)
console.log(sortedNumbers1)


// some - to check to see if at least one elem in the array passes the test

const hasEvenNum = sortedNumbers.some(num => num % 2 === 0)
console.log(hasEvenNum)

// every - to check to see if all elem in the array passes the test

const numbersLessThan20 = sortedNumbers.every(num => num < 20)
console.log(numbersLessThan20)


// reduce - starts with elem from array and iterates them to a single value

const totalOfSortedNum = sortedNumbers.reduce((acc, num) => acc + num)

console.log(totalOfSortedNum)

// using reduce to find max value
const findMaxValue = sortedNumbers.reduce((acc, val) => val > acc ? val : acc)

console.log(findMaxValue)



// objects - are unordered collection of related data in the form of key value pairs
const oldPerson = {
    firstName:'Joyce',
    lastName:'Austin',
    age: 53,
    games:{
        sports:'football',
        indoor:'chess'
    }
}


// using shorthand
const firstName = 'matt'

const person1 = {
    firstName: firstName
}
// can be written as 

const person2 = {firstName}

// assessing obj - u can also use square brackets when the keyname is unusual or too long or has dashes
console.log(oldPerson.age)

// updating obj

oldPerson.age = 90

// add new property to object
oldPerson.gender = 'male'

// methods in objects - assigning a function to an obj property 

var myObj = {
    myMethod:function(params){
        console.log('this is a method', params)
    },
    // or using shorthand 
    myOtherMethod(params){
        console.log('another method', params)
    }
}

// to update with a funtion 

myObj.myMethod = () => console.log('updating...')


console.log(myObj.myMethod())

// defining methods for an obj type 

function displayCar(){
    var result = `A Beautiful ${this.year} ${this.make} ${this.model}`
    console.log(result)
}

// pretty_print is a function to display the formatted string 

// adding methods to an object constructor 
// by this we are making this function a method of car 
this.displayCar = displayCar


// full definition of car 
function Car(make, model, year, owner){
    this.make = make 
    this.model = model 
    this.year = year
    this.owner = owner 
    this.displayCar = displayCar
}

const car1 = new Car('Toyota', 'Corolla', 2020, 'Spencer')
const car2 = new Car('Honda', 'Civic', 2025, 'Lewis')

// calling methods on objects
car1.displayCar()
car2.displayCar()


// built in methods 
// objects.create() - creates new obj linked to the prototype of an existing obj
const role = {
    title: 'developer',
    type: 'full-time',
    isOpen: true,
    showDetails() {
        const status = this.isOpen ? 'is open for applications' : "is not open for applications";
        console.log(`The ${this.title} role is ${this.type} and ${status}.`);
    }
};

const designer = Object.create(role);
designer.title = "designer";
designer.showDetails(); // The designer role is full-time and is open for applications.


// object.keys() - returns all the keys of and object

console.log(Object.keys(role))


// object.values() - returns all the values of and object

console.log(Object.values(role))

// object.entries() - returns a nested array of key value pairs for easy iteration and maniputlation

console.log(Object.entries(role))


// Object.assign() - copies values from one object to another usefull for merging objects
const personalDetails = { firstName: 'Jane', lastName: 'Doe' };
const jobDetails = { position: 'Manager', company: 'Tech Inc' };

const profile = Object.assign({}, personalDetails, jobDetails);
console.log(profile); // {firstName: "Jane", lastName: "Doe", position: "Manager", company: "Tech Inc"}

// Objects.freeze() - prevents modifications to an obj properties ensuring immutability 

const settings = { theme: 'light', notifications: true };
Object.freeze(settings);

settings.theme = 'dark'; // No effect
console.log(settings); // {theme: "light", notifications: true}


// Objects.seal() - prevents new properties from being added but allow existing ones to be modified 
const account = { username: 'user123', password: 'pass123' };
Object.seal(account);

account.password = 'newpass'; // Allowed
account.email = 'user@example.com'; // Not allowed
console.log(account); // {username: "user123", password: "newpass"}


// object.getPrototypeOf() - retrieves the prototype of an object, usefull for understanding inheritance and prototype chanins


// asked in interviews
// tricky concepts in js - scope, hoisting - it affects variable and function declarations (allows functions to be called b4 they are defined), closures - allows functions to retain access to their lexical scope even when executed outside it, 


// scope - it solves the problem of security, efficiency, naming conflicts


/*
type of scope 
global - defined outside a function - it remians in the memory untill the program is executed - to many vars declared as global cause out of memory issue

issues - it can be changed from everywhere which could lead to errors

local - defined within a function
block - scope within a block of code 


to find a scope find the closes opening and closing curlly brackets thats its scope
*/


const someFuntion = () => {
    // local scope #1
    const firstName = 'Adrian'

}

console.log(firstName)

someFuntion()

/*
advantages of local scope
it offers a gurantee that values of vars will remain intact while running the task

naming flexibiltiy - u can give local vars the same name and they wont conflict

memory efficiency - they are deleted the moment the function executes
*/

// block scope - if, loops, switch cases

// always declare vars in the scope u intend to use them

// always write within where the have to be used if u have to use global bring it a step up




//global scope
const globalVar = 'I am global!'

function showGlobal(){
    console.log(globalVar)
}


showGlobal()


console.log(globalVar)



// function scope 
function myFunction(){
    const functionScopedVar = 'I am inside the function'

    console.log(functionScopedVar)
}



myFunction()

// console.log(functionScopedVar)


// 3 block scope (let & const)


 if(true){
    const block = 'am a block scope'
    console.log(block)
}
// console.log(block)


// hoisting 
// a js mechanism that shows how variables and functions are declared and accessed within ur code - it moves the vars to the top of thier scope before code gets executed - so no matter where functions and vars are declared they are moved to the top of thier scope weather global or local

// hoisting cant work on const and let

// it only works for var thats why we dont use var anymore


// closures they allow function to access their outer scope out even after the outer scope have finished executing 


const outer = () => {
    const outerVar = 'Hello';

    const inner = () => {
        const innerVar = 'Hi';

        console.log(innerVar, outerVar)
    }

    return inner;
}

const innerFn = outer();


// to call the actual inner function 

innerFn()



const init = () => {
    const hobby = 'Learning javascript';

    const displayHobby = () => {
        console.log(hobby)
    }


    return displayHobby
}

// this is the reference to the instance of displayHobby
const runInit = init()


runInit()


// value vs reference

/*
js have two type of vars the primitive and complex


*/

let x = 1;
let y = x;


x =99

console.log('x', x)
console.log('y', y)
// when we copy primitive value changes in the primitive types and we change the main value it does not affect the copied one 

// but with complex types instead of copying the values it instead copies the reference to the values


const animals = ['dogs', 'cats']
const otherAnimals = animals;

// but if we change animals in anyway the changes also affect otherAnimals 

animals.push('pigs')

console.log(otherAnimals)


// when two sperate obj are created and they a have the same values since they would have diff reference === wont be equal 

// clone - create independent copies of data struc without maintaining reference to them 

// shallow clone - this copy the top properties without the nested obj

// to clone arrays - use spread operator 

const numbersList = [1,2,3,4,5,6]


const newNumbers = [...numbersList]



numbersList.push(7)

console.log(numbersList)

console.log(newNumbers)


// second way to clone array is slice 

const clonedNumbers = numbers.slice()

console.log(clonedNumbers)


// cloning objects 

const newPersons = {
    name:'spencer'
}

const clonedPersons ={...newPersons}


// or using object assign to clone


const anotherPerson = Object.assign({}, newPersons)


// deep clone copies everything including a nested objects - a complete copy of the object so that changes does not affect the original object on a deeper level

const myPerson = {age:34, height:'6ft'}


// convert the obj to a string which removes the references and converts it back to a string
const newMyPerson = JSON.parse(JSON.stringify(myPerson))


/*
common properties
classList: A list of classes assigned to an element. It's an array-like object.
className: A string of classes assigned to an element, separated by spaces if there are multiple classes.
id: A string representing the ID assigned to an element.
innerHTML: The inner content of the element, including nested elements, in string form.

common methods 
addEventListener: Listens for a specified event and calls a function when that event occurs. Events can include click, mousedown, mouseup, focus, blur, etc.
getBoundingClientRect: Returns the height, width, left, and top values of an element relative to the browser.
hasAttribute: Checks if an element has a specific attribute.
removeAttribute: Removes a specified attribute from an element.
removeEventListener: Removes an event listener from an element.
scroll: Scrolls to an element's position.
*/


// adding to dom
const newElement = document.createElement("div");
newElement.textContent = "Hello, World!";
document.body.appendChild(newElement);


/*
traversing the dom 
<ul class="subjects">
  <li>Maths</li>
  <li class="fav-subject">Science</li>
  <li>English</li>
</ul>

<script>
  const subjects = document.querySelector(".subjects");

  console.log(subjects.firstElementChild); // First element of the list
  console.log(subjects.lastElementChild); // Last element of the list

  const favSub = document.querySelector(".fav-subject");

  console.log(favSub.previousElementSibling); // Element before favorite subject
  console.log(favSub.nextElementSibling); // Element after favorite subject
  console.log(favSub.parentElement); // Parent of favorite subject (entire list)
</script>

traversal methods
ele.childNodes
ele.firstChild
ele.lastChild
ele.previousSibling
ele.nextSibling
ele.parentNode


remove node 


*/

// classes are a blueprint for creating objects 
// constructor used to initalize the obj properties like init in python
class Person {
    constructor (name, age, working){
        this.name = name 
        this.age = age 
        this.working = working 
    }
}


// creating an instance of class 
let user = new Person("john", 24, true)


// the new keyword creates a new object

const myPersonal = new Object()
myPersonal.name = 'Joyce'

console.log(myPersonal)


// the Object() is a built in constructor which allows u to create objects u can also define your own constructor to create objects of a specific type
// creating a custom constructor
function Person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
}

const john = new Person("John", 23, "Teacher");
console.log(john.name); // prints "John"


// new & this keyword - the new keyword binds this to the new obj being created so in the person this refers to the new Person object just like self in python

// this refers to the object that is executing the current function. it provides a way to access the properties and methods of the object within the function being executed


function Sentence(words) {
  this.words = words;
  console.log(this);
}

// defining an instance
const S = new Sentence("hello there, we are learning about the `this` keyword");

// in a global context this is undefined 
// in method context it referst the obj the medod is called on 
// in a constructor it refers to the new object being created


// imports and exports
// exports allow u to export multiple things refer to dogs.js 
// export default allow only onething is exported

// importing exports 

import {dogs, woof, number} from './dogs'

console.log(dogs, woof, number)


// rest parameters - it allows u to rep and indefinate number of arguments in an array its done with 3 dots ...


function calcTotal(...numbers){
    let sum = 0
    for (const num of numbers){
        sum += num
    }
    return sum
}

console.log(calcTotal(1,2,3,4,5,6))

/*
a function can have only one rest param 
rest param must be the last pram of the function definition
trailing commas are not allowed after the rest param 
the rest param cannot have a default value


rest param are true arrays u can use sort, map, forEach, and pop on them but the arguments obj is not a real array 

Callee Property: The arguments object has a deprecated callee property, which rest parameters do not have.
Parameter Syncing: In non-strict mode, the arguments object syncs its indices with parameter values, while rest parameters do not.
Content: Rest parameters bundle only the extra parameters into an array, excluding named arguments. The arguments object includes all parameters.

*/


// destructring allows u to unpack values

let introduction = ["Hello", "I", "am", "Sarah"];
let [greeting, pronoun] = introduction;

console.log(greeting); // "Hello"
console.log(pronoun);  // "I"

// skipping items in array 
let [greeting1, , , name] = ["Hello", "I", "am", "Sarah"];
console.log(greeting1); // "Hello"
console.log(name);     // "Sarah"


// assigning the rest of an array 
let [greeting2, ...intro] = ["Hello", "I", "am", "Sarah"];
console.log(greeting2); // "Hello"
console.log(intro);    // ["I", "am", "Sarah"]


// using defualt values
let [greeting4 = "Hi", name = "Sarah"] = ["Hello"];
console.log(greeting4); // "Hello"
console.log(name);     // "Sarah"


// swapping values with destructring 
let a = 3;
let b = 6;

[a, b] = [b, a];

console.log(a); // 6
console.log(b); // 3


// destructuring for objects
let user11 = { name: "Alice", age: 25 };
let { name, age11 } = user11;

console.log(name); // "Alice"
console.log(age11);  // 25


// renaming vars 
let user0 = { name: "Alice", age: 25 };
let { name, age0 } = user0;

console.log(name); // "Alice"
console.log(age0);  // 25



// destructuring in the function param 
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

let user9 = { name: "Bob", age: 30 };
displayUser(user9); // Name: Bob, Age: 30

// clean code tips 
// avoid abbreviations uid instead of userId
// use modules to keep code neat 
// comment ur code wisely
// use es6 classes 
// embrace promises
// seprate constants and enums 

// write small function they should do 1 things
// it should be limited to 3 logical blocks 
// avoid repetition 
// keep it short and sweet
// it should be readable