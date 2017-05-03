console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", [])
	.controller("infoController", infoController)
	.controller("loanController", loanController);

function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet
}

function loanController(){
	this.amount = 0;
	this.apr = 0;
	this.month = function(n){
		var yearInterest = (this.amount * (this.apr/100));
		var monthInterest = (yearInterest/12);
		var accrued_interest = Math.round((n * monthInterest)*100)/100;
		var total_balance = Math.round((this.amount + accrued_interest)*100)/100;
		return {
			accrued_interest,
			total_balance
		};
	};
}
