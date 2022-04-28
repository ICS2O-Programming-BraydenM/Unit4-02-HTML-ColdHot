// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

// This function displays a statement to see whether or not you guessed the program's correct randomly generated number 
 
function displayGreeting () {
  // declare constants
	const MIN = 1;
  const MAX = 6;

  let correct = Math.floor((Math.random()*MAX)+MIN);
  
	// get user input (number 1-6 from user)
	let number = parseInt(document.getElementById('number').value)

  // if statements, if number is correct, display a message that tells them so, if number is incorrect, display a message that tells them so 
	if (number == correct) {
		let greeting = "You are right, that is the correct random number"
    document.getElementById('greeting').innerHTML = greeting
	}

  else {
    let greeting = "Nope, wrong number. Try again."
    document.getElementById('greeting').innerHTML = greeting + " The correct Number is " + correct + "."
  }
}

