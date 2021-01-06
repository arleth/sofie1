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

// Opg 3 

// opg 4
function skoStoerrelse() { // 
	let stoerrelseListe = "";
	let boerneListe = ""; 
	let dameListe = "";
	let herreListe = "";
	let soegeFelt = document.getElementById("soegStoerrelser").value; // hvad har brugeren tastet
	let erOK = testSoegeFelt(soegeFelt); // er input ok?
	if(erOK) { // hvis input er ok, tjekker vi findes størrelsen overhovedet 
		if(findesStoerrelse(soegeFelt)) { 

			for(let i = 0; i<fodtoejsliste.length; i++) { 
				if(fodtoejsliste[i].type === 3 || fodtoejsliste[i].type === 4) {
					if(harStoerrelse(fodtoejsliste[i].stoerrelser, soegeFelt)) {
						boerneListe += "Børne sko:" + highlight(fodtoejsliste[i]);
					} else {
						boerneListe += "Børne sko:" + ikkeHighlight(fodtoejsliste[i]);
					}
				}
				if(fodtoejsliste[i].type === 1 || fodtoejsliste[i].type === 4) { 
					if(harStoerrelse(fodtoejsliste[i].stoerrelser, soegeFelt)) {
						dameListe += "Dame sko:" + highlight(fodtoejsliste[i]);
					} else {
						dameListe += "Dame sko:" + ikkeHighlight(fodtoejsliste[i]);
					}
				}
				if(fodtoejsliste[i].type === 2 || fodtoejsliste[i].type === 4) {
					if(harStoerrelse(fodtoejsliste[i].stoerrelser, soegeFelt)) {
						herreListe += "Herre sko:" + highlight(fodtoejsliste[i]);
					} else {
						herreListe += "Herre sko:" + ikkeHighlight(fodtoejsliste[i]);
					}
				}	
			} 
			document.getElementById("liste").innerHTML = boerneListe;
			document.getElementById("liste").innerHTML += dameListe;
			document.getElementById("liste").innerHTML += herreListe;
			document.getElementById("soegStoerrelser").value = ""; // blanker søgefeltet, så man er klar til ny søgning
		} else {
			document.getElementById("liste").innerHTML = ""; // blanker resultatet, og skriver meddelelse til bruger
			document.getElementById("soegStoerrelser").value = "Størrelsen findes ikke"; 
		}

	}
	else { 
		document.getElementById("liste").innerHTML = ""; // blanker resultatet, og skriver meddelelse til bruger 
		document.getElementById("soegStoerrelser").value = "Skal være et tal";
	}
};  

function highlight(fodtoej) { 
	return "<br>" + "<b>" + "Mærke: " + "</b>" + '<span class="highlight_tal">' + fodtoej.maerke + "</span>" + " " + "<b>" + "Navn: " + "</b>" + '<span class="highlight_tal">' + fodtoej.navn + "</span>" + "<br>" + "<br>"; 
}

function ikkeHighlight(fodtoej) {
	return "<br>" + "<b>" + "Mærke: " + "</b>" + fodtoej.maerke + " " + "<b>" + "Navn: " + "</b>" + fodtoej.navn + "<br>" + "<br>";
}

function testSoegeFelt(indhold) {
	// test om indholdet er et tal og returner true ellers returner false.  
	let tal = Number(indhold); // hvis Number(indhold) giver et tal er vi glade, så benytter vi vores else. 
	 if (indhold === "" || isNaN(tal)) {  // hvis indhold er tom eller IKKE et tal, så er vi ikke glade.  
		return false;  
	} else { 
		return true; 
	}
};

function findesStoerrelse(tal) { // søger efter om vi har størrelsen: leder efter om vi har de globalt
	let findes = false; 
	for(let i = 0; i<fodtoejsliste.length; i++) { 
		findes = harStoerrelse(fodtoejsliste[i].stoerrelser, tal); 
		if(findes) {
			break; // ved første fundet stoppes søgningen
		}
	}
	return findes; 
};

function harStoerrelse(stoerrelser, soegeFelt) { // designet til at søge i præcist eet array af størrelser
	let fundet = false; // vi starter med at antage vi ikke har fundet den
	let soegTal = Number(soegeFelt); // Konverterer til tal, da vi arbejder med et array af tal
	for(let i = 0; i<stoerrelser.length; i++) {
		if(stoerrelser[i] === soegTal) { // Da vi nu har konverteret til den rigtige type, virker det med 3X = 
			fundet = true; 
		} 
		if(fundet) {
			break; // ved første fundet stoppes søgningen
		}
	}
	return fundet; 
};




/*function nySko(type, maerke, navn, stoerrelser, pris) {
	this.type = type, 
	this.maerke = maerke, 
	this.navn = navn, 
	this.stoerrelser = stoerrelser, 
	this.pris = pris,
	this.getName = function skoKnap() {
		return this.type + " " + this.maerke + " " + this.navn + " " + this.stoerrelser + " " + this.pris
	}
};
*/

/*var produkter = [];

function tilfoejSko() {
	nyt_produkt = document.getElementById("box").value; 
	fodtoejsliste.push(nyt_produkt); 
	return false; 
};
*/




/*var produkter = [];

function tilfoejSko() {
	var nyt_produkt = document.getElementById("ny_sko"); 
	produkter.push(nyt_produkt.value); 
	nyt_produkt.value = "";
};

function visFodtoej() {
	document.getElementById("produkter").innerHTML = values.join(", ");
}; */

// fodtoejsliste.push(nyt_produkt_liste); 

	/*var produkter = document.querySelectorAll('.produkt'); 
	var produkterArray = Array.from(produkt); 
	var nyArray = [];
	nyArray.push.apply(nyArray, fodtoejsliste);
	nyArray.push.apply(nyArray, produkterArray); 
	*/

/*var produkterne = {
Type: document.getElementById("type").value
Mærke: document.getElementById("maerke").value
Navn: document.getElementById("navn").value
Størrelser: document.getElementById("stoerrelser").value
Pris: document.getElementById("pris").value
};
*/

/*var nySko = {
	type:			document.getElementById("type").value,
	maerke:			document.getElementById("maerke").value,
	navn:			document.getElementById("navn").value,
	stoerrelser:	document.getElementById("stoerrelser").value,
	pris:			document.getElementById("pris").value
};
*/ 











