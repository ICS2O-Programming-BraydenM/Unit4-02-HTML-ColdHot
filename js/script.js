// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

// This function displays a statement to see if the inputted temperature is considered hot or cold in my opinion 
 
function onButtonClick () {
  
	// get user input (degrees in celsius)
	let temperature = parseInt(document.getElementById('degrees').value)

  // if statements, if number is correct, display a message that tells them so, if number is incorrect, display a message that tells them so 
	if (temperature >= 15) {
		let greeting = "It is hot outside!"
    document.getElementById('greeting').innerHTML = greeting
	}

  else {
    let greeting = "it is cold outside."
    document.getElementById('greeting').innerHTML = greeting + " The correct Number is " + correct + "."
  }
}

