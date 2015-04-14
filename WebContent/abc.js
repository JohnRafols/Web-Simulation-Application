/*
 * Javascript practice
 */



function message(){
	var date = new Date();
	var hour = date.getHours();	
	if(hour>12){
		hour = hour-12;
	}
	var minutes = date.getMinutes();
	var days = new Array("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday");
	document.write("The time is " + hour + ":" + minutes + "</br>");
	document.write("The day is: " + days[date.getDay()]);
}

function string(){
	var temp = "Hello world";
	for(var i = 0; i< temp.length; i++ ){
		document.write(temp.charAt(i) + "<br>");	
	}
}

function palindrome(){
	//Iterate through the word
	var word = prompt();
	document.write(word + "<br>");
	var checker = true;
	var backwards = word.length;
	for(var i = 0; i<word.length; i++){
		document.write(word.charAt(i) + " vs " + word.charAt(backwards-1) + "<br>");
		if(word.charAt(i) != word.charAt(backwards-1) ){
			checker = false;
		}
		backwards--;
	}
	document.write(checker);
	var x = new car("Honda ", 61);
	var y = new supercar(x);
	x.info();
	y.info();
	
	
	
}

//Object practice

function car(name, number){
	this.name = name;
	this.number = number;
	this.info = function(){
		document.write("<br>" + this.name + this.number);
	};
}

//Inheritance practice
function supercar(car){
	var parent = Object.create(car);
	parent.info = function(){
		document.write("<br> Who cares, you're a super car!");
	};
	return parent;
}

//Recursion practice

function recursion(number, max, string){
	//document.write("<br> Current number: " + number);
    if(number+1<max){
		return recursion(number+1, max, string + (number+1) + ", ");
	}
	else{
		return string + "]";
	}
}

//Main method mock
function main(){
	var temp = prompt("Make an array, give me a number");
	//var x = recursion(parseInt(temp), 9, "[");
	//document.write("<br> The range is: " + x);
	var x = newarray(new Array(),parseInt(temp));
	document.write("<br> Here you go: "+ arraysum(x , 0));
	
}

//Array practice
function newarray(array,number){
	if(number != 0){
		array.push(number);
	    return newarray(array, number-1);
	}		 
	return array;
}

//Recursion 2 practice
function arraysum(array, sum){
	if(array.length>0){
		var add = array.pop();
		return arraysum(array,sum+add);
	}
	return sum;
}