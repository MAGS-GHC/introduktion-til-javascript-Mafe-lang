//Skriv alt jeres kode her

console.log(
  "Opgave 1.1 - Lav et program, som skriver “Hello World” i konsollen"
);
//Lav jeres svar her
console.log("Hello World");


console.log(
  "Opgave 1.2 - Lav et program, som skriver “Hello” og på næste linje skriver “World” i konsollen"
);
//Lav jeres svar her
console.log("Hello \nWorld");


console.log(
  "Opgave 1.3 - Lav et program, som skriver følgende i konsollen. → (se html-dokumentet)"
);
//Lav jeres svar her
console.log("* \n** \n*** \n** \n*");


console.log(
  "Opgave 1.4 - Lav et program, hvor i definere en konstant eller variabel og programmet skriver hvilken type det er, i konsollen. (Altså om det er en int, string, bool osv."
);
//Lav jeres svar her
let definition = 3 < 5;
console.log(typeof definition);


console.log(
  "Opgave 1.5 - Print svarene på følgende matematiske operationer (se html-dokukentet) ved at skrive det direkte ind i Console.log();"
);
//Lav jeres svar her
console.log(10 - 5);
console.log(25 / 3);
console.log(25 % 3);
console.log(25 % 2);
console.log(3 ** 2);


console.log(
  "Opgave 1.6 - Skriv i konsollen kombinationen af de her 2 strings (se html-dokumentet) ved brug af deres navn"
);
//Lav jeres svar her
let tekst1 = "Hello ";
let tekst2 = "World!";
console.log(tekst1 + tekst2);


console.log(
  "Opgave 1.7 - Udskriv længden af den string `GF2 Online` - altså antal tegn"
);
//Lav jeres svar her
let eksempelTekst = "GF2 Online";
let length = eksempelTekst.length;
console.log(length);

console.log(
  "Opgave 1.8 - Lav et program som skriver et tilfældig tal i konsollen"
);
//Lav jeres svar her
console.log(Math.random());


console.log(
  "Opgave 1.9 - Find ud af hvad hver linje skriver ud i vores konsol og forklar hvorfor lige præcis det bliver skrevet"
);
//Lav jeres svar her
let number = 23;

console.log(number = "23")
console.log("Den printer den nuværende variabel som en string i stedet for en integer")

console.log(number == "23")
console.log("Den sammenligner variablen '23' med '23'")

console.log(number === "23")
console.log("variablet er den samme værdi og type, altså 23 og en string")

console.log(number -= 23)
console.log("Den sætter variablen: number(altså '23') = number(altså '23') - 23, hvilket er 0")

console.log(number += 23)
console.log("Den sætter vores ny defineret variabel 0, til at være number(altså 0) = number(altså 0) + 23, hvilket er 23")

console.log(number += "23")
console.log("Den lægger vores variabel 23, som en string sammen med en anden string på '23', så vi for '2323'")

console.log(number -= "46")
console.log("Den trækker '46' fra vores ny defineret variabel på '2323', hvilket bliver 2277")

console.log(number != "23")
console.log("Eftersom number er ny defineret til at være 2277 er det ikke ligmed '23' og != betyder ikke ligmed er resultatet True")

console.log(number **= 2)
console.log("Eftersom number er ligmed 2277 bliver number(altså 2277) * 2277 = 5184729, fordi ** er det samme som number opløftet i 2")

console.log(
  "Opgave 2.1 - I skal skrive et stykke kode som fortæller om et tal (int) er lige eller ulige"
);
//Lav jeres svar her

let tal = 20;

if (tal % 2 == 0) {
  console.log("tallet er lige")
} else {
  console.log("Tallet er ikke lige")
}


console.log(
  "Opgave 2.2 - I skal skrive et stykke kode som fortæller om 5 går op i det tal som i vælger (int). Hvis den går op i det skal i skrive: 5 går op i (det tal i har valgt"
);
//Lav jeres svar her

let valgtTal = 55;

if (valgtTal % 5 == 0) {
  console.log("5 går op i det valgte tal")
} else {
  console.log("5 går ikke op i det valgte tal")
}


console.log(
  "Opgave 2.3 - Lav opgaven↑ igen, men i stedet for selv at vælge et tal skal i lave sådan at den selv vælger et tal mellem 0 og 100"
);
//Lav jeres svar her

let randomTal = Math.floor(Math.random() * 100);

if (randomTal % 5 == 0) {
  console.log("5 går op i det random tal: " + randomTal)
} else {
  console.log("5 går ikke op det random tal: " + randomTal)
}


console.log(
  "Opgave 2.4 - Lav et program som fortæller jer hvilke af de her 3 tal der er størst: a=25, b=33, c=12"
);
//Lav jeres svar her

a = 25
b = 33
c = 12

if (a > b) {
    if (a > c ) {
    console.log("a er det største tal")
  }
} else if (b > c) {
  console.log("b er det største tal")
} else {
  console.log("c er det største tal")
}


console.log(
  "Opgave 2.5 - Lav et program der fortæller hvor varmt det er ud fra en temperatur. Kategorierne er i html-dokumentet"
);
//Lav jeres svar her

let udeTemp = 17;

if (udeTemp <= 0) {
  console.log("Det er frostvejr")
} else if (udeTemp <= 10) {
  console.log("Det er meget koldt")
} else if (udeTemp <= 20) {
  console.log("Det er koldt") 
} else if (udeTemp <= 30) {
  console.log("Det er normalt vejr")
} else if (udeTemp <= 40) {
  console.log("Det er varmt")
} else {
  console.log("Det er meget varmt")
}


console.log(
  "Opgave 2.6 - Lav et program som omformer tal til ugedage ved brug af conditionals, som eksemplerne i html-dokumentet"
);
//Lav jeres svar her

let ugeDag = 3;

if (ugeDag == 1) {
  console.log("Det er mandag")
} else if (ugeDag == 2) {
  console.log("Det er tirsdag")
} else if (ugeDag == 3) {
  console.log("Det er onsdag") 
} else if (ugeDag == 4) {
  console.log("Det er torsdag")
} else if (ugeDag == 5) {
  console.log("Det er fredag")
} else if (ugeDag == 6) {
  console.log("Det er lørdag")
} else if (ugeDag == 7) {
  console.log("Det er søndag")
} else {
  console.log("Der er 7 dage på en uge. Intast et tal mellem 1-7 for at finde ugedagen")
}


console.log(
  "Opgave 3.1 - Lav et program som skriver alle tal fra 1 til 100 ud i konsollen en efter en"
);
//Lav jeres svar her

let i = 1;

while (i < 101) {
  console.log(i);
  i++;
}


console.log(
  "Opgave 3.2 - Lav et program som skriver alle tal fra 1 til 102, på følgende måde (Se html-filen)"
);
//Lav jeres svar her

for (let i = 0; i < 101; i++) {
  let j = i + 1;
  let k = i + 2;
  console.log(i, j, k);
  
}


console.log(
  "Opgave 3.3 - Lavet spillet FizzBuzz, spillet går ud på at man i en rundkreds (loop) skifter til at tælle. (Se html-filen - har brugt for loop)"
);
//Lav jeres svar her

for (i_2 = 1; i_2 < 35; i_2++) {
  if (i_2 % 3 == 0 && i_2 % 5 == 0) {
    console.log("Fizz Buzz");
  } else if (i_2 % 3 == 0) {
    console.log("Fizz")
  } else if (i_2 % 5 == 0) {
    console.log("Buzz")
  } else {
    console.log(i_2) 
  }
}


console.log(
  "Opgave 3.3 - Lavet spillet FizzBuzz, spillet går ud på at man i en rundkreds (loop) skifter til at tælle. (Se html-filen - har brugt while loop)"
);
//Lav jeres svar her

let i_3 = 0;

while (i_3 < 35) {
  if (i_3 % 3 == 0 && i_3 % 5 == 0) {
    console.log("Fizz Buzz");
  } else if (i_3 % 3 == 0) {
    console.log("Fizz")
  } else if (i_3 % 5 == 0) {
    console.log("Buzz")
  } else {
    console.log(i_3) 
  }
  i_3++;
}


console.log(
  "Opgave 3.4 - Lav et program som udregner det faktorielle af et tal med et loop. Med for-loop)"
);
//Lav jeres svar her

let n = 1

for (i_5 = 10; i_5 >= 1; i_5--) {
  n = n * i_5 
  if (i_5 == 1) {
    console.log(n)
  }
}


console.log(
  "Opgave 3.4 - Lav et program som udregner det faktorielle af et tal med et loop. Med while-loop)"
);
//Lav jeres svar her

let n_2 = 1
let i_6 = 10

while (i_6 >= 1) {
  n_2 = i_6 * n_2 
  i_6--;
  if (i_6 == 1) {
    console.log(n_2)
  } 
}


console.log(
  "Opgave 3.5 - Lav et program som skriver multiplikationstabel for et givet tal: (se html-dokument)"
);
//Lav jeres svar her

let i_4 = 0;

while (i_4 < 9) {
  i_4++;
  let resultat = i_4 * 15;
  console.log("15 * " + i_4 + " = " + resultat);
}


console.log(
  "Opgave 4.1 - Skriv 'Viborg' i konsollen ved at trække den ud fra følgende array (se html-dokumentet)"
);
//Lav jeres svar her

byer = ["Randers", "Viborg", "Aarhus", "København"];
console.log(byer[1])


console.log(
  "Opgave 4.2 - Tilføj 'Skive' til denne array"
);
//Lav jeres svar her

byer = ["Randers", "Viborg", "Aarhus", "København"];
byer.push("Skive")
console.log(byer)


console.log(
  "Opgave 4.3 - Erstat den værdi, uden at ændre direkte i arraye'et, som ikke passer ind, så array'et stemmer"
);
//Lav jeres svar her

talrække = [0, 1, 0, 3, 4, 5, 6];
talrække.splice(2, 1)
console.log(talrække)


console.log(
  "Opgave 4.4 - Skriv, i konsollen, den største værdi fra følgende array. Selvfølgelig ikke manuelt."
);
//Lav jeres svar her

talrække = [1, 2, 3, 4, 11, 55, 99, 100];
console.log(Math.max(...talrække))


console.log(
  "Opgave 4.5 - Sorter den her array"
);
//Lav jeres svar her

talrække = [0, 12, 0, 22, 300, 4, 5];
talrække.sort(function(a, b) {return a - b});
console.log(talrække)


console.log(
  "Opgave 4.6 - Sorter den her array"
);
//Lav jeres svar her

talrække_2 = [0, 12, 0, 22, 300, 4, 5];
talrække_2.sort(function(a, b) {return a - b});
talrække_2.reverse();
console.log(talrække_2)


console.log("Opgave 5.1 - Skriv noget kode eller kode sammen med en knap, så i eksekvere følgende funktion:")

function myFunction(){
  console.log("Hello World")
}

console.log("Opgave 5.2 - I skal lave en funktion som tager 2 tal og returnerer summen af dem.")


function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(3,7); // => 10
console.log(result);

let svar = "Ja" || "ja" || "jA"
function rightAnswer(svar)
{
if(svar=="Ja"||svar=="ja"||svar=="jA"){
  return "True"; 
} else {
  return "False";
}
}

let result2 = rightAnswer("Ja");
console.log(result2)


console.log(" Opgave 5.4 - Lav en funktion som fungere som en password-tjekker, i skal definere et password i koden og derefter lave en funktion som kun skriver true hvis man skriver det rigtige kodeord og false hvis det er forkert")

let password = "Fodbold123";
function passwordChecker(password)
{
if(password==="Fodbold123"){
  return "True";
} else {
  return "False";
}
}

let input = passwordChecker("Fodbold123");
console.log(input)


console.log("Opgave 5.5 - Lav en funktion som i opgaven før, men for brugernavn. Forskellen er at et brugernavn ikke er case-sensitiv, altså at den er ligeglad med store og små bogstaver.");



let userName = "Mags";

function UserNameChecker(inputThree){

  userName = userName.toLowerCase();
  inputThree = inputThree.toLowerCase();

if (userName === inputThree){
  return true;
} else {
  return false;
}
}

inputTwo = UserNameChecker("Hej");
console.log(inputTwo);


console.log("Lav et program som summere følgende array, uden brug af Aggregat Funktioner:")

 talrække = [0,12,0,22,300,4,5];

 let sum = 0;

 for (let i = 0; i < talrække.length; i++) {
  sum += talrække[i];
 }


 console.log("Summen af talrække:", sum);

 
console.log("Opgave 6.2 - Lav et program som skriver alle værdierne i dette array, ved brug af foreach:")

talrækkeTo = [0, 12, 0, 22, 300, 4, 5];

function printElement(element) {
    console.log(element*2);
}
talrækkeTo.forEach(printElement);

console.log(" Opgave 6.3 - Lav et program som returnere indexet af det højeste tal, altså giver dens placering i begge disse arrays")

InventoryOne = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12]
InventoryTwo = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 122]


let index = InventoryOne.indexOf(Math.max(...InventoryOne),0);
console.log("Highest value in InventoryOne is placed at:",index);

let index2 = InventoryTwo.indexOf(Math.max(...InventoryTwo),0);
console.log("Highest value in InventoryTwo is placed at:",index2);


console.log("Opgave 6.4 - Lav et program som tæller hvor mange gange 12, står i den her array:")

Bag = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12];

const specificNumber = 12;
let count = 0;

for(dK = 0; dK < Bag.length; dK++) {
  if(Bag[dK] === specificNumber){
    count++ }
}
console.log("Tallet",specificNumber, "optræder", count, "gange");


kontier = [0, -12, 0, -22, -300, 4, 5, -12, 12, -212, 12]

let count2 = 0;

for(DB = 0; DB < kontier.length; DB++){
  if(kontier[DB] > 0){
    count2++
  }
}
console.log("Der er", count2, "Positive kontier");

console.log("Lav et program som finder gennemsnittet af følgende array og alle andre arrays bestående af tal uden brug af Aggregat Funktioner:")
Income = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32];

 let sumTre = 0;

 for (oP = 0; oP < Income.length; oP++) {
  sumTre += Income[oP];
 }

 console.log("Summen af talrække", sumTre);
 console.log("Gennemsnit", sumTre/Income.length);
console.log("Længde på talrække", Income.length);

console.log("Opgave 7.1 - Lav et program som finder variansen af følgende array og alle andre arrays bestående af tal uden brug af Aggregat Funktioner:")

Normalfordeling = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32]

let sumFire = 0;

 for (saF = 0; saF < Normalfordeling.length; saF++) {
  sumFire += Normalfordeling[saF];
 }
































