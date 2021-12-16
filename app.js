// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let num = p1.dataset.number = (parseInt(p1.dataset.number) + 10).toString();
p1.innerHTML += " : " + num;

let p2 = document.getElementById('p2');
let word = p2.dataset.word.length;
p2.innerHTML += " : " + word;

let p3 = document.getElementById('p3');
let fruit = p3.dataset.list.split(' | ');
for (let fruits of fruit) {
    p3.innerHTML += "<br>" + fruits.trim();
}

let p4 = document.getElementById('p4');
let booeleanT = p4.dataset.booleen;
if (booeleanT) {
    p4.innerHTML += " : la value et true";
}
else {
    p4.innerHTML += " : la value et false";
}

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
p5.dataset.numbertwo = '22';
let num2 = p5.dataset.numbertwo = (parseInt(p5.dataset.numbertwo) + 10).toString();
p5.innerHTML += " Depuis JS - Dataset représentant un nombre : " + num2;

let p6 = document.getElementById('p6');
p6.dataset.wordtwo = 'fromage';
let word2 = p6.dataset.wordtwo.length;
p6.innerHTML += "Depuis JS - Dataset représentant une chaîne de caractères : " + word2;

let p7 = document.getElementById('p7');
p7.dataset.array = 'sucre | soupe | salade';
p7.innerHTML = "Depuis JS - Dataset représentant une liste :"
let alim = p7.dataset.array.split(' | ');
for (let food of alim) {
    p7.innerHTML += "<br>" + food.trim();
}
let p8 = document.getElementById('p8');
p8.dataset.booleantwo = 'false';
let booeleanTest = p4.dataset.booleantwo;
if (booeleanTest) {
    p8.innerHTML += "Depuis JS - Dataset représentant un booléen : la value et true";
}
else {
    p8.innerHTML += "Depuis JS - Dataset représentant un booléen : la value et false";
}

