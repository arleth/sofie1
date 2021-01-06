const Ftype = {
	DAME: 	1,
	HERRE:  2,
	BARN:   3,
	NONE:   4  
};

var adrian = {
	type:			Ftype.BARN,
	maerke:			"Woden",
	navn:			"ADRIAN",
	stoerrelser:		[27,28,29,30,31,32,33,34],
	pris: 			699.95,
	baeredygtighed: 	false
};

var omnia = {
	type: 			Ftype.NONE,
	maerke: 		"Aviator",
	navn:        		"Omnia",
	stoerrelser: 		[35,37,38,39,40,45,46],
	pris:           929.95 
};

var fall = {
	type:   		Ftype.DAME,
	maerke: 		"Copenhagen Shoes",
	navn: 	     		"FALL",
	stoerrelser: 		[36,38,40,41],
	pris: 			999,
	baeredygtighed: 	false
};

var arizona = {
	type: 			Ftype.NONE,
	maerke: 		"Birkenstock",
	navn: 			"ARIZONA",
	stoerrelser: 		[35,36,37,38,39,40,41,42,43,44,45,46,47,48],
	pris: 			499.00,
	baeredygtighed: 	false 
	};

var ydun_suede_mesh_ii = {
	type: 			Ftype.DAME,
	maerke: 		"Woden",
	navn: 			"YDUN SUEDE MESH II",
	stoerrelser: 		[36,37,38,39,42,41,40],
	pris: 			649,
	baeredygtighed: 	true 			
};

var altius = {
	type: 			5,
	maerke: 	 	"Excelsior",
	navn:  			"Altius",
	stoerrelser: 		[41,42,43,44,46], 
	pris: 			489.50,
	baeredygtighed: 	true 
};

var plataustøvletter = {
	type: 			Ftype.DAME,
	maerke: 		"Even&Odd",
	navn: 			"Plateaustøvletter",
	stoerrelser: 		[36,37,38,39,40,41,42],
	pris: 			379.00,
	baeredygtighed: 	false 
};

var comfort_3 =	{	
	type:			Ftype.HERRE,
	maerke:			"Resistis",
	navn:			"Comfort 3",
	stoerrelser:		[39,42,43,45,46,47],
	pris:			479.95,
	baeredygtighed:		true
}; 

var fodtoejsliste = 
	[adrian, omnia, fall, arizona, ydun_suede_mesh_ii, altius, plataustøvletter, comfort_3];

//Opgave 2

//Dame-knap:
function dameSko() {
	var dameListe = ""; 
	for(var i = 0; i<fodtoejsliste.length; i++) {
		if(fodtoejsliste[i].type === 1 || fodtoejsliste[i].type === 4) {
			dameListe += "Dame sko:" + "<br>" + "<b>" + "Mærke: " + "</b>" + fodtoejsliste[i].maerke + " " + "<b>" + "Navn: " + "</b>" + fodtoejsliste[i].navn + "<br>" + "<br>";
		} 
	} 
	document.getElementById("liste").innerHTML = dameListe;
	visBilleder("dame");  
};

//herre-knap
function herreSko(){ 
	var herreListe = ""; 
	for(var i = 0; i<fodtoejsliste.length; i++) {
		if(fodtoejsliste[i].type === 2 || fodtoejsliste[i].type === 4) {
			herreListe += "Herre sko:" + "<br>" + "<b>" + "Mærke: " + "</b>" + fodtoejsliste[i].maerke + " " + "<b>" + "Navn: " + "</b>" + fodtoejsliste[i].navn + "<br>" + "<br>";
		}
	} 
	document.getElementById("liste").innerHTML = herreListe;
	visBilleder("herre");
};

//Børne-knap
function boerneSko(){ 
	var boerneListe = ""; 
	for(var i = 0; i<fodtoejsliste.length; i++) {
		if(fodtoejsliste[i].type === 3 || fodtoejsliste[i].type === 4) {
			boerneListe += "Børne sko:" + "<br>" + "<b>" + "Mærke: " + "</b>" + fodtoejsliste[i].maerke + " " + "<b>" + "Navn: " + "</b>" + fodtoejsliste[i].navn + "<br>" + "<br>";
		}
	} 
	document.getElementById("liste").innerHTML = boerneListe;
	visBilleder("boern"); 
}; 

function visBilleder(hvad) {
	var billeder = document.querySelectorAll('.billede'); //tager alle med det class navn   
	var billedeArray = Array.from(billeder); // standard funktion, der laver om til array, så det kan bruges i en for-løkke 
	for(var i = 0; i < billedeArray.length; i++) {
		var billede = billedeArray[i]; 
		if(billede.id === hvad) { // hvad: har betydning når vi kalder den  
			billede.style.display = 'block'; 
		} else {
			billede.style.display = 'none';
		}  
	} 
};

