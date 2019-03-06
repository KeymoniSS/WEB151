var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
		
		// create an array of words
		//...
		var words = [
		"javascript",
		"monkey",
		"amazing",
		"pancake",
		"waffles",
		"supercalifragilisticexpialidocious",
		"spectrophotofluorometrically",
		"pseudopseudohypoparathyroidism",
		"pneumonoultramicroscopicsilicovolcanoconiosis",
		"sonic",
		"murky",
		"awesome",
		"time",
		];
		
		var guesses = [];
		
		//Pick a random word
		
		var word = words[Math.floor(Math.random() * words.length)];
		
		//Set up the answer array
		var answerArray = [];
		for (var i = 0; i < word.length; i++) {
		answerArray[i] = "_";
		}
		
		var remainingLetters = word.length;
		count = 0;
		while (remainingLetters > 0){
		//Show the player their progress
		alert(answerArray.join(" "));
		document.write("<p> Try #" + count + ":  " + answerArray.join(" ") + "</p>");
		count++;
		//Get a guess from their progress
		var guess = prompt("Guess a letter, or click Cancel to stop playing.");
		if(guess === null) {
			break;
		} else if (guess.length !== 1) {
			alert("Please enter a single letter.");
		}else {
		guesses.push(guess)
		alert(guesses.join(" "));
		//Update the game state with the guess
		for(var j = 0; j < word.length; j++) {
			if (word[j] === guess){
			answerArray[j] = guess;
			remainingLetters--;
				}
			}
		}
		
		
		// The end of the game loop
		}
	
		//Show the answer and congratulate the player
		alert(answerArray.join(" "));
		alert("Good job! The answer was " + word);