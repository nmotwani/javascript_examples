/**
 * This is to show why classes got introduced in javascript
 */


console.log("==========Javascript classes demo===============")

function Product(quantity, price, desc) {	
	return {
		employeePrice: function() {
			return price * 0.90; 
		},
		salePrice: function() {
			return price * 0.95;
		},
		getDesc: function() {
			return desc;
		}
	}
}

var p1 = Product(10, 200, "Shirt");
var p1_1 = Product(20, 400, "Expensive Shirt");
var p2 = new Product(50, 300, "Jacket");

console.log(p1)
console.log(p1_1)
console.log(p2)

p1.getDesc = function () {
	return "asdasdadasdasdasdasd";
}

console.log(p1.getDesc())
console.log(p1_1.getDesc())


function ProductN(quantity, price, desc) {
	this.price = price;
	this.desc = desc;
	this.quantity = quantity;
}

var p3 = new ProductN(19,1500, "Television1");
var p3_3 = new ProductN(29,1500, "Television2");
//var p4 = ProductN(10,1500, "Television3");

ProductN.prototype.stringify = function() {
	console.log(this.price+":"+this.quantity+":"+this.desc);
}

console.log(p3)
p3.stringify();

p3.__proto__.stringify = function() {
	console.log("blah blah");
}
p3.stringify();
p3_3.stringify();
console.log("##########")

console.log(this)

console.log("***************")
//console.log(this)
//p4.stringify();

//p3.stringify();
//p3_3.stringify();

Object.freeze()
Object.seal()
Object.create()

class ProductCl {
	constructor(quantity, price, desc) {
		this.qty = quantity;
		this.prc = price;
		this.des = desc;
	}
	
	employeePrice() {
		return this.prc * 0.90; 
	}
	
	salePrice() {
		return this.prc * 0.95;
	}
	
}

var p5 = new ProductCl(10, 200, "Shirt");
console.log(p5)




