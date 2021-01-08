const Ftype = {
    DAME: 1,
    HERRE: 2,
    BARN: 3,
    NONE: 4
};

var adrian = {
    type: Ftype.BARN,
    maerke: "Woden",
    navn: "ADRIAN",
    stoerrelser: [27, 28, 29, 30, 31, 32, 33, 34],
    pris: 699.95,
    baeredygtighed: false
};

var omnia = {
    type: Ftype.NONE,
    maerke: "Aviator",
    navn: "Omnia",
    stoerrelser: [35, 37, 38, 39, 40, 45, 46],
    pris: 929.95
};

var fall = {
    type: Ftype.DAME,
    maerke: "Copenhagen Shoes",
    navn: "FALL",
    stoerrelser: [36, 38, 40, 41],
    pris: 999,
    baeredygtighed: false
};

var arizona = {
    type: Ftype.NONE,
    maerke: "Birkenstock",
    navn: "ARIZONA",
    stoerrelser: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
    pris: 499.00,
    baeredygtighed: false
};

var ydun_suede_mesh_ii = {
    type: Ftype.DAME,
    maerke: "Woden",
    navn: "YDUN SUEDE MESH II",
    stoerrelser: [36, 37, 38, 39, 42, 41, 40],
    pris: 649,
    baeredygtighed: true
};

var altius = {
    type: 5,
    maerke: "Excelsior",
    navn: "Altius",
    stoerrelser: [41, 42, 43, 44, 46],
    pris: 489.50,
    baeredygtighed: true
};

var plataustoevletter = {
    type: Ftype.DAME,
    maerke: "Even&Odd",
    navn: "Plateaustøvletter",
    stoerrelser: [36, 37, 38, 39, 40, 41, 42],
    pris: 379.00,
    baeredygtighed: false
};

var comfort_3 = {
    type: Ftype.HERRE,
    maerke: "Resistis",
    navn: "Comfort 3",
    stoerrelser: [39, 42, 43, 45, 46, 47],
    pris: 479.95,
    baeredygtighed: true
};

var fodtoejsliste =
    [adrian, omnia, fall, arizona, ydun_suede_mesh_ii, altius, plataustoevletter, comfort_3];

function insert(type, maerke, navn, stoerrelser, pris, baeredygtighed) {
    let sko = {
        type: Number(type),
        maerke: maerke,
        navn: navn,
        stoerrelser: stoerrelser,
        pris: Number(pris),
        baeredygtighed: baeredygtighed
    }
    fodtoejsliste.push(sko)
}

console.log("loaded");

function checkForm(formen) {
    console.log("bum");
    let tekst = formen.maerke.value;
    console.log(tekst)
    formen.maerke.value = tekst + ' erik : ' + formen.typeListe.options[typeListe.selectedIndex].value
    // https://mkyong.com/javascript/javascript-get-selected-value-from-dropdown-list/
    let type = formen.typeListe.options[typeListe.selectedIndex].value;
    let maerke = formen.maerke.value;
    let navn = formen.navn.value;
    let stoerrelser = Array.from(formen.strListe.selectedOptions).map(v => Number(v.value));
    let pris = formen.pris.value;
    let baeredygtighed;
    if (formen.baereDygtighed.options[baereDygtighed.selectedIndex].value === "1") {
        baeredygtighed = true
    } else {
        baeredygtighed = false;
    }
    insert(type, maerke, navn, stoerrelser, pris, baeredygtighed);
    console.log(fodtoejsliste);
}