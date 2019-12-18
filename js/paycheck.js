// Script - paycheck.js 
// This script calculates a paycheck


function calculate() {
	'use strict';
	
	var regPay; 
	var overtimePay;
	var grossPay;
	var totalTax;
	var netPay;
	var formattedName;
	
	var lastName = document.getElementById('lastName').value;
    var regHours = document.getElementById('regHours').value;
    var overtimeHours = document.getElementById('overtimeHours').value;
    var hourlyRate = document.getElementById('hourlyRate').value;
    var FICA = document.getElementById('FICA').value;
	var stateTax = document.getElementById('stateTax').value;
	var fedTax = document.getElementById('fedTax').value;
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	
	regPay = regHours * hourlyRate;
	overtimePay = +overtimeHours *(+hourlyRate * 1.5);
	grossPay = regPay + overtimePay;
	totalTax = (+FICA + +stateTax + +fedTax)/100*+grossPay;
	netPay = grossPay-totalTax;
	formattedName = lastName + ', ' + firstName;

	regPay = regPay.toFixed(2);
	overtimePay = overtimePay.toFixed(2);
	grossPay = grossPay.toFixed(2);
	netPay = netPay.toFixed(2);
	
	
	document.getElementById('regPay').value = regPay;
	document.getElementById('overtimePay').value = overtimePay;
	document.getElementById('grossPay').value = grossPay;
	document.getElementById('totalTax').value = totalTax;
	document.getElementById('netPay').value = netPay;
	document.getElementById('result').value = formattedName;
	return false;    
} 

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
} 
window.onload = init;