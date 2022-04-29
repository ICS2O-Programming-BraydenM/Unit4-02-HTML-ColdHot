// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

// This function displays a statement to see if the inputted temperature is considered hot or cold in my opinion 
 
function onButtonClick () {

  // declare constants 
  const DEGREES_THRESHOLD = 15;
  
	// get user input (degrees in celsius)
	let temperature = parseInt(document.getElementById('degrees').value)

  // if statements, if number is correct, display a message that tells them so, if number is incorrect, display a message that tells them so 
	if (temperature >= DEGREES_THRESHOLD) {
		let greeting = "It is hot outside!"
    document.getElementById('display-results').innerHTML = greeting
	}

  else {
    let greeting = "It is cold outside."
    document.getElementById('display-results').innerHTML = greeting 
  }
}

