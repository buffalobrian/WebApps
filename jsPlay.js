var snowInches = 5;

var skiArea = {
	name : "Breckenridge", 
	base : 19,
	isOpen : function() {
		return (this.base >= 24);
	},
	openSoon : function() {
		return (this.base + snowInches >= 24);
	},
	openTomorrow : function(snowInches) {
		return (this.base + snowInches >= 24);
	}
};

document.writeln("ski area name: ", skiArea.name);
document.writeln("isOpen call: ", skiArea.isOpen());
document.writeln("isOpen 1st class fn: ", skiArea.isOpen);
document.writeln("snowInches: ", snowInches);
document.writeln("openSoon call: ", skiArea.openSoon());
document.writeln("openTomorrow call: ", skiArea.openTomorrow());

var backCountry = function() {
	document.writeln("vertical ", vertical);
	avalancheChance = 50;
	var vertical = 800; //This is a local var
	document.writeln("vertical ", vertical);
	snowInches = 20;
}

//document.writeln(avalancheChance); //This does not work (is not defined error) as avalancheChance is a local variable inside the backCountry function

backCountry();
document.writeln("Avalanche chance outisde fn: ", avalancheChance); //works because leaving out var makes it almost a global var, except it can be deleted
document.writeln("snowInches: ", snowInches);