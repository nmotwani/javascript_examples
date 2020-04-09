/**
 * Pure Functions
 */

//Given a list of names, convert first character to an upper case
class Person {
	constructor(name, gender) {
		this.name = name;
		this.gender = gender;
	}
}

var niraj = new Person("niraj", "M");
var arnav = new Person("arnav", "M");
var aarzu = new Person("aarzu", "F");
var aarav = new Person("aarav", "M");
var preeti = new Person("preeti", "F");

var persons = new Array();
persons.push(niraj);
persons.push(arnav);
persons.push(aarav);
persons.push(aarzu);
persons.push(preeti);

console.log(niraj.constructor.name);

class Converter {
	convert(list) {
		if(list.length == 0) {
			console.log("Input List is empty");
		} else {
			//var output = new Array();
			list.map(
				(element) => {
					if(element.constructor.name === 'Person') {
						element.name = element.name.charAt(0).toUpperCase() + element.name.slice(1);
					} else {
						element.name = "";
					}
				});
		}
	}
	
	getFemales(list) {
		var females = list.filter(elem => {
			return elem.gender === 'F' ? true:false
		});
		return females;
	}
}




var converter = new Converter();
converter.convert(persons);
persons.map(element => console.log(element.name))
console.log("******************")

var females = converter.getFemales(persons);
females.map(element => console.log(element.name))

console.log(1 == '1')


