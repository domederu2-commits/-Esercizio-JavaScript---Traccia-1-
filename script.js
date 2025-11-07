let masters = ['Yoda', 'Windu', 'Anakin'];
masters[2] = 'Obi-wan';
console.log(masters);
// ['Yoda', 'Windu', 'Obi-wan']

let frase = ['Che', 'la', 'Scorza', 'sia', 'con', 'te']
frase[2] = 'Forza';
console.log(frase)
// ['Che', 'la', 'Forza', 'sia', 'con', 'te']

let trilogie = ['Trilogia originale', 'Trilogia prequel', 'Trilogia sequel'];
trilogie.pop();
console.log(trilogie);
// ['Trilogia originale', 'Trilogia prequel']

let fraseoriginale = 'padre tuo sono io Luke';
let parole = fraseoriginale.split(' ');
let nuovaFrase = [parole[4], parole[3], parole[2], parole[1], parole[0]].join(' ');
console.log(nuovaFrase);
// 'Luke io sono tuo padre]

let jedi1 = ['Anakin', 'Obi-wan'];
let jedi2 = ['Yoda', 'Ahsoka'];
let tuttiJedi = jedi1.concat(jedi2);
console.log(tuttiJedi);
// ['Anakin', 'Obi-wan', 'Yoda', 'Ahsoka']

let mix = [1, 2, 3, 'ciao', 7, 8, 9];
mix.splice(3, 1, 4, 5, 6);
console.log(mix);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

let sith = ['Sidious', 'Vader'];
sith.unshift('Dooku', 'Maul');
console.log(sith);
// ['Dooku', 'Maul', 'Sidious', 'Vader']

let numeri = [1, 2, 3, 4, 5, 6];
numeri.push(7, 8, 9);
console.log(numeri);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]



