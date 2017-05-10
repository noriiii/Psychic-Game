      	// Variable & Arrays

      	// Array of Computer's choice of letter from A-Z
    	  var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   		  
        // Empty Array that will store User Choice  
        var userChoiceHistory = [];

   	  	// Changeable texts		
  	  	var userKey = document.getElementById("guessShow");
      	var winCountShow = document.getElementById("winCountShow");
      	var loseCountShow = document.getElementById("loseCountShow");
      	var guessLeftShow = document.getElementById("guessLeftShow");

      	// Counters
      	var winCounter = 0;
      	var loseCounter = 0;
      	var guessLeft = 9;
      	
      
      	// End of Variables & Arrays

      
      // Functions

      // Random number generator
     	function getRandomArbitrary(min, max) {
        	return Math.floor(Math.random() * (max - min)) + min;
      	}

      	// On Key Up Event
      	document.onkeyup = function (event) {
        
      		//Variable representing the letter choice by user
        	var userChoice = userKey.textContent;
          console.log("User Guess:" + event.key);
        	
          // Variable that allows Computer to chose randomly from the array of letter choices
        	var computerChoice = letterChoices[getRandomArbitrary(0, letterChoices.length - 1)];
          console.log("Computer Choice:" + computerChoice);
			        	             
   			  // If user input is equal to computer's randomly generated letter, the user wins
        	if (event.key == computerChoice){
            	winCounter++;
            	winCountShow.textContent = winCounter;
            	guessLeftShow.textContent = guessLeft;
        	} 

        	// If user input is not equal to computer's randomly generated letter, the user loses
        	else if (userChoice !== computerChoice){
           		loseCounter++;
            	loseCountShow.textContent = loseCounter;     

              // Lose one guess per wrong guess
              guessLeft = guessLeft - 1;

              // Only allow zero to nine "Guess Left"
              if (guessLeft > 0) {
                guessLeftShow.textContent = guessLeft;  
              }

              else if (guessLeft = 0 || guessLeft < 0) {
                guessLeftShow.textContent=0;
              }

          }

          // Show a history of User Choices
          userChoiceHistory.push(event.key);
          userKey.textContent = userChoiceHistory;

    	}  
