const text = "Det var saa grueligt koldt; det sneede og det begyndte at blive mørk Aften; det var ogsaa den sidste Aften i Aaret, Nytaarsaften. I denne Kulde og i dette Mørke gik paa Gaden en lille, fattig Pige med bart Hoved og nøgne Fødder; ja hun havde jo rigtignok havt Tøfler paa, da hun kom hjemme fra; men hvad kunde det hjælpe! det var meget store Tøfler, hendes Moder havde sidst brugt dem, saa store vare de, og dem tabte den Lille, da hun skyndte sig over Gaden, i det to Vogne foer saa grueligt stærkt forbi; den ene Tøffel var ikke at finde og den anden løb en Dreng med; han sagde, at den kunde han bruge til Vugge, naar han selv fik Børn.\n\nDer gik nu den lille Pige paa de nøgne smaa Fødder, der vare røde og blaa af Kulde; i et gammelt Forklæde holdt hun en Mængde Svovlstikker og eet Bundt gik hun med i Haanden; Ingen havde den hele Dag kjøbt af hende; Ingen havde givet hende en lille Skilling; sulten og forfrossen gik hun og saae saa forkuet ud, den lille Stakkel! Sneefnokkene faldt i hendes lange gule Haar, der krøllede saa smukt om Nakken, men den Stads tænkte hun rigtignok ikke paa. Ud fra alle Vinduer skinnede Lysene og saa lugtede der i Gaden saa deiligt af Gaasesteg; det var jo Nytaarsaften, ja det tænkte hun paa.\n\nHenne i en Krog mellem to Huse, det ene gik lidt mere frem i Gaden end det andet, der satte hun sig og krøb sammen; de smaa Been havde hun trukket op under sig, men hun frøs endnu mere og hiem turde hun ikke gaae, hun havde jo ingen Svovlstikker solgt, ikke faaet en eneste Skilling, hendes Fader vilde slaae hende og koldt var der ogsaa hjemme, de havde kun Taget lige over dem og der peeb Vinden ind, skjøndt der var stoppet Straa og Klude i de største Sprækker. Hendes smaa Hænder vare næsten ganske døde af Kulde. Ak! en lille Svovlstikke kunde gjøre godt. Turde hun bare trække een ud af Bundtet, stryge den mod Væggen og varme Fingrene. Hun trak een ud, »ritsch!« hvor spruddede den, hvor brændte den! det var en varm, klar Lue, ligesom et lille Lys, da hun holdt Haanden om den; det var et underligt Lys! Den lille Pige syntes hun sad foran en stor Jernkakkelovn med blanke Messingkugler og Messingtromle; Ilden brændte saa velsignet, varmede saa godt! nei, hvad var det! - Den Lille strakte allerede Fødderne ud for ogsaa at varme disse, - - da slukkedes Flammen, Kakkelovnen forsvandt, - hun sad med en lille Stump af den udbrændte Svovlstikke i Haanden.\n\nEn ny blev strøget, den brændte, den lyste, og hvor Skinnet faldt paa Muren, blev denne gjennemsigtig, som et Flor; hun saae lige ind i Stuen, hvor Bordet stod dækket med en skinnende hvid Dug, med fiint Porcellain, og deiligt dampede den stegte Gaas, fyldt med Svedsker og Æbler! og hvad der endnu var prægtigere, Gaasen sprang fra Fadet, vraltede hen af Gulvet med Gaffel og Kniv i Ryggen; lige hen til den fattige Pige kom den; da slukkedes Svovlstikken og der var kun den tykke, kolde Muur at see.\n\nHun tændte en ny. Da sad hun under det deiligste Juletræ; det var endnu større og mere pyntet, end det hun gjennem Glasdøren havde seet hos den rige Kiøbmand, nu sidste Juul; tusinde Lys brændte paa de grønne Grene og brogede Billeder, som de der pynte Boutikvinduerne, saae ned til hende. Den Lille strakte begge Hænder i Veiret - da slukkedes Svovlstikken; de mange Julelys gik høiere og høiere, hun saae de vare nu de klare Stjerner, een af dem faldt og gjorde en lang Ildstribe paa Himlen.\n\n»Nu døer der Een!« sagde den Lille, for gamle Mormoer, som var den eneste, der havde været god mod hende, men nu var død, havde sagt: naar en Stjerne falder, gaaer der en Sjæl op til Gud.\n\nHun strøg igjen mod Muren en Svovlstikke, den lyste rundt om, og i Glandsen stod den gamle Mormoer, saa klar, saa skinnende, saa mild og velsignet.\n\n»Mormoer!« raabte den Lille, »O tag mig med! jeg veed, Du er borte, naar Svovlstikken gaaer ud; borte ligesom den varme Kakkelovn, den deilige Gaasesteg og det store velsignede Juletræ!« - og hun strøg ihast den hele Rest Svovlstikker, der var i Bundtet, hun vilde ret holde paa Mormoer; og Svovlstikkerne lyste med en saadan Glands, at det var klarere end ved den lyse Dag. Mormoer havde aldrig før været saa smuk, saa stor; hun løftede den lille Pige op paa sin Arm, og de fløi i Glands og Glæde, saa høit, saa høit; og der var ingen Kulde, ingen Hunger, ingen Angst, - de vare hos Gud!\n\nMen i Krogen ved Huset sad i den kolde Morgenstund den lille Pige med røde Kinder, med Smiil om Munden - død, frosset ihjel den sidste Aften i det gamle Aar. Nytaarsmorgen gik op over det lille Liig, der sad med Svovlstikkerne, hvoraf et Knippe var næsten brændt. Hun har villet varme sig! sagde man; Ingen vidste, hvad smukt hun havde seet, i hvilken Glands hun med gamle Mormoer var gaaet ind til Nytaars Glæde!";
console.log("hello script");
// add the text to a <p> in column 2
const column2 = document.getElementById('col2');
const paragraphElement = document.createElement('p');
paragraphElement.textContent = text;
column2.appendChild(paragraphElement);
// hide page2 + page3 for a start
const picture1 = document.getElementById('side1');
const picture2 = document.getElementById('side2');
const picture3 = document.getElementById('side3');
picture1.style.display = 'block';
picture2.style.display = 'none';
picture3.style.display = 'none';
// add event listeners to top and bottom buttons
// const topNextPageButton = document.getElementById('buttonTop');
// topNextPageButton.addEventListener('click', nextPage);

// globals to hold the initial setup - will be incremented during button events - only used in version 1
let currentPage = 'side1';
let pageCounter = 0;
let firstTime = true;
let currentIndex = 0;

/**
 * Display the next page - this works - version 1 - but only going forward!
 * @param event
 */
function nextPage(event) {
    console.log('nextPage happened!');
    let nextIndex = calculateNextIndex(event);
    let pics = document.querySelectorAll('.picture'); // find all pictures
    let picsArray = Array.from(pics); // convert in order to iterate using an old school for loop
    let tempNewPage = currentPage; // work against a temp - postpone update of currentPage until we are done!
    let nextPageIndex = 0; // for calculating next page
    if (firstTime) {
        nextPageIndex = 1; // first time
        firstTime = false;
    } else {
        nextPageIndex = pageCounter % 3;
    }
    for (let i = 0; i < picsArray.length; i++) {
        let d = picsArray[i];
        console.log('picsarray: ' + d.id);
        if (d.id === currentPage) {
            d.style.display = 'none';
        } else {
            // all other pages
            if (i === nextPageIndex) {
                d.style.display = 'block';
                tempNewPage = d.id;
                pageCounter = nextPageIndex + 1;
            } else {
                d.style.display = 'none';
            }
        }
    }
    currentPage = tempNewPage;
}

/**
 * This almost works - however, never finalized - version 1 !!
 * @param event
 */
function previousPage(event) {
    console.log('previousPage happened!');
    let nextIndex = calculateNextIndex(event);
    let pics = document.querySelectorAll('.picture'); // find all pictures
    let picsArray = Array.from(pics); // convert in order to iterate using an old school for loop
    let tempNewPage = currentPage; // work against a temp - postpone update of currentPage until we are done!
    let nextPageIndex = 0; // for calculating next page
    if (firstTime) {
        nextPageIndex = 2; // first time
        firstTime = false;
    } else {
        nextPageIndex = pageCounter % 3;
    }
    for (let i = 0; i < picsArray.length; i++) {
        let d = picsArray[i];
        console.log('picsarray: ' + d.id);
        if (d.id === currentPage) {
            d.style.display = 'none';
        } else {
            // all other pages
            if (i === nextPageIndex) {
                d.style.display = 'block';
                tempNewPage = d.id;
                pageCounter = nextPageIndex - 1;
            } else {
                d.style.display = 'none';
            }
        }
    }
    currentPage = tempNewPage;
}

/**
 * get pictures and convert in order to iterate using an old school for loop
 * @returns {Element[]}
 */
function getPictureArray() {
    let pics = document.querySelectorAll('.picture'); // find all pictures
    return Array.from(pics);
}

/**
 * set diplay attribute on the pictures according to the nextPageIndex calculated.
 * @param nextPageIndex
 */
function setDisplayNextPage(nextPageIndex) {
    let picsArray = getPictureArray();
    for (let i = 0; i < picsArray.length; i++) {
        let d = picsArray[i];
        console.log('picsarray: ' + d.id);
        if (i === nextPageIndex) {
            d.style.display = 'block';
        } else {
            d.style.display = 'none';
        }
    }
}

/**
 * onClick from Top-Button - next button
 * @param event - the event contains information about which button is called
 */
function nextPageVersion2(event) {
    console.log('next version 2');
    let nextPageIndex = calculateNextIndex(event);
    setDisplayNextPage(nextPageIndex);
}

/**
 * onClick from Bottom-Button - previous button
 * @param event - the event contains information about which button is called
 */
function previousPageVersion2(event) {
    console.log("back version 2");
    let nextPageIndex = calculateNextIndex(event);
    setDisplayNextPage(nextPageIndex);
}

/**
 * Find the current page index - done by
 * finding the index containing a div with display = 'block'
 */
function getCurrentIndex() {
    let picsArray = getPictureArray();
    let currentIndex = 0;
    for (let i = 0; i < picsArray.length; i++) {
        let d = picsArray[i];
        if (d.style.display === 'block') {
            currentIndex = i;
            break;
        }
    }
    return currentIndex;
}

/**
 * find the next index
 * @param event - which button hit us - passed on from the onClick handler (method)
 * @returns {number} - the next index to display
 */
function calculateNextIndex(event) {
    console.log('calculateNextIndex from: ' + event.className);
    let nextIndex = 0; // at least we will start from the beginning
    if (event.className === 'bottom') {
        // go back
        nextIndex = getCurrentIndex() - 1;
        // prevent index-out-of-bounce exceptions
        if (nextIndex < 0) {
            nextIndex = 2;
        }
    }
    if (event.className === 'top') {
        // go forward
        nextIndex = getCurrentIndex() + 1;
        // prevent index-out-of-bounce exceptions
        if (nextIndex > 2) {
            nextIndex = 0;
        }
    }
    console.log('Calculated NextIndex: '+nextIndex);
    return nextIndex;
}