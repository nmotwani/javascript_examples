/**
 * 
 */

//function declarations
function sample(number) {
	return number * number;
}

function modify(myObject) {
	myObject.make = 'Toyota';
}

//function expressions
console.log(newSquare(5));
console.log(1 == '1');


function newSquare(number) {
	return number * number
}

const square = function(number) {
	return number * number;
}

//you can pass a function as a parameter
var applyAll = function(fun, list) {
	
	let result = [];
	let i;
	for (i=0; i!=list.length; i++) {
		result[i] = fun(list[i]); //apply the passed in function
	}
	return result;
}

var input = [1,3,5,10,9];
var output = applyAll(square, input);
console.log(output);

//recursive function to find factorial

function factorial(num) {
	if((num === 0) || (num === 1)) {
		return num;
	} else {
		return num * factorial(num-1);
	}
}
console.log(factorial(5));

//the javascript function is actually a Function object
console.log(factorial.constructor == Function);

//function scope
var x =10,
    y = 20,
    player = 'Niraj';

function getScore() {
	var x = 2,
	    y = 5;
	
	function finalScore() {
		return 'Player: '+player+' scored:'+(x+y);
	}
	
	return finalScore();
}
console.log(getScore());

//using the call function to update the context prior to invoking the function
var mathLib = {
	pi : 3.14,
	area : function(r) {
		return this.pi * r * r;
	},
	circumference : function(r) {
		return this.pi * 2 * r;
	}
}

console.log(mathLib.area(2));
console.log(mathLib.area.call({pi:3.14156}, 2));

//using the apply function to update the context prior to invking the function
//same as call except that the function arguments are passed as a list
var mathLibNew = function() {
	var pi = 3.14;
	
	return {
		
		mypi : pi,
		
		area : function(r) {
			return this.mypi * r * r;
		},
		circumference : function(r) {
			return this.mypi * 2 * r;
		}
	}
}();

console.log('==========');
console.log(mathLibNew.area(2));	
console.log(mathLibNew.area.apply({mypi:3.14156}, [2]));

function generator(input) {
	var index = 0;
	
	return {
		next: function() {
			if(index < input.length) {
				let current = input[index];
				index = index + 1;
				return current;
			}
			return "";
		}
	}
}

var generator1 = generator("Niraj");
console.log(generator1.next())
console.log(generator1.next())
console.log(generator1.next())
console.log(generator1.next())
console.log(generator1.next())
console.log(generator1.next())

//Understand objects well 

var ages = {"niraj":39, "preeti":38, "aarav":11, "arnav":7, "aarzu":2};
//console.log(JSON.stringify(ages))

function getHighestAge(ageList) {
	var maxAge = 0;
	
	for(i of Object.keys(ageList)) {
		if(ageList[i] > maxAge) {
			maxAge = ageList[i];
		}
	}
	
	return maxAge;
}

console.log(getHighestAge(ages))

//Prototypical Inheritance
var CustomerType =  {
	RETRANS:1,
	TWOWAYTRAFFIC:2,
	DOMESTIC:3,
	INTERNATIONAL:4
};

var Customer = function(name, type) {
	this.name = name;
	this.type = type;
	return this;
}

var amazon = new Customer("Amazon", CustomerType.INTERNATIONAL);
var starz = new Customer("Starz", CustomerType.DOMESTIC);

Customer.prototype.stringify = function() {
	console.log("Customer: "+this.name + " of type: "+this.type);
}

amazon.stringify();
starz.stringify();

Customer.prototype.details = function() {
	console.log("Customer: "+this.name + " of type: "+this.type + " onboarded on:"+this.onBoardedDate);
}

amazon.details(); //onBoardedDate in undefined

var onBoardedCustomer = function(name, type) {
	Customer.call(this,name, type);
	this.onBoardedDate = '12/31/2019';
}
//hide/unhide below to see the magic
onBoardedCustomer.prototype = Object.create(Customer.prototype);

var newNetflix = new onBoardedCustomer("new Netflix", CustomerType.INTERNATIONAL);
newNetflix.details();

//Classes are now available but remember as of ECMAScript 6 specification, they are just a sugar coating
class CustomerEC6 {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	stringify() {
		console.log("Customer: "+this.name + " of type: "+this.type);
	}
	details() {
		console.log("Customer: "+this.name + " of type: "+this.type + " onboarded on:"+this.onBoardedDate);
	}
}
 var hulu = new CustomerEC6("hulu", CustomerType.DOMESTIC);
 hulu['onBoardedDate'] = '06/01/2018';
 //var hulu = CustomerEC6.call({onBoardedDate = '06/01/2018'},"hulu", CustomerType.DOMESTIC);
 hulu.stringify();
 hulu.details();













