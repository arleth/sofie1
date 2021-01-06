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
	pris:           	929.95 
};

var fodtoejsliste = 
	[
	adrian,
	omnia,
	{
		type:   		Ftype.DAME,
		maerke: 		"Copenhagen Shoes",
		navn: 	     		"FALL",
		stoerrelser: 		[36,38,40,41],
		pris: 			999,
		baeredygtighed: 	false
	},
	{
		type: 			Ftype.NONE,
		maerke: 		"Birkenstock",
		navn: 			"ARIZONA",
		stoerrelser: 		[35,36,37,38,39,40,41,42,43,44,45,46,47,48],
		pris: 			499.00,
		baeredygtighed: 	false 
	},
	{
		type: 			Ftype.DAME,
		maerke: 		"Woden",
		navn: 			"YDUN SUEDE MESH II",
		stoerrelser: 		[36,37,38,39,42,41,40],
		pris: 			649,
		baeredygtighed: 	true 			
	},
	{
		type: 			5,
		maerke: 	 	"Excelsior",
		navn:  			"Altius",
		stoerrelser: 		[41,42,43,44,46], 
		pris: 			489.50,
		baeredygtighed: 	true 
	},
	{
		type: 			Ftype.DAME,
		maerke: 		"Even&Odd",
		navn: 			"Plateaustøvletter",
		stoerrelser: 		[36,37,38,39,40,41,42],
		pris: 			379.00,
		baeredygtighed: 	false 
	},
	{	
		type:			Ftype.HERRE,
		maerke:			"Resistis",
		navn:			"Comfort 3",
		stoerrelser:		[39,42,43,45,46,47],
		pris:			479.95,
		baeredygtighed:		true
	}
	];

