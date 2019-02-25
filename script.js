var insultParts = 
	[{bodyPart: "ear", adjective: "hairy", animal: "rhino", animalpart: "butt"},
	{bodyPart: "head", adjective: "slimy", animal: "pig", animalpart: "tail"},
	{bodyPart: "nose", adjective: "crooked", animal: "boar", animalpart: "nose"}]
	;
	
	var insult = {};
	
	insult.randomize = function() {
	
	insult.ranBodyPart = insultParts[Math.floor(Math.random() * 3)].bodyPart;
	insult.ranAdjective = insultParts[Math.floor(Math.random() * 3)].adjective;
	insult.ranAnimal = insultParts[Math.floor(Math.random() * 3)].animal;
	insult.ranAnimalPart = insultParts[Math.floor(Math.random() * 3)].animalpart;
		}
	
	insult.print = function() {
	insult.randomize();
	message = "Your " + insult.ranBodyPart + " is more " +
	insult.ranAdjective + " than a " + insult.ranAnimal + "'s " + insult.ranAnimalPart + "!!!";
	
	document.write(message);
	console.log(message);
}

	insult.print();
