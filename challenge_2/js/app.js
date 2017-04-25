console.log('challenge #2 -- app.js loaded!');
var app = angular.module("appTwo", []);

app.controller("WelcomeController", WelcomeController);
app.controller("ClassController", ClassController);


function WelcomeController(){
	this.full_name = "Alexi";
	this.age = "27";
	this.city = "Norfolk";
	this.state = "Virginia";
	this.shout = function (input) {
		var out = input.toUpperCase() + "!";
		return out;
	};
}
// var app = angular.module("appTwo", []);
// app.controller("WelcomeController", WelcomeController);

// function WelcomeController(){
//   this.full_name = "YOUR NAME"
// }

function ClassController(){
	this.class_name = "WDI 3";
	this.enrolled_students = "12?";
	this.start_date = "March-ish";
	this.end_date = "6/3/2017";
	this.daysRemaining = function(input) {
		var input = Date.parse(input);
		var out = input - Date.parse("4/24/2017");
		var minutes = 1000 * 60;
		var hours = minutes * 60;
		var days = hours * 24;
		return Math.round(out / days);
	};
}