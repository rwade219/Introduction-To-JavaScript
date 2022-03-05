//version 1: using a while loop

let names = [ 'Nyx','Kairi', 'Whisper', 'Thea'];
let Uppernames = [];
let index = 0;

while (index < names.length) {
    let upperCaseName = names[index].toUpperCase();
    Uppernames.push(upperCaseName);
    index = index +1;

}
console.log(Uppernames);

// Version 2 : using a for loop

let Newnames = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let NewupperNames = [];

for (let index = 0; index < Newnames.length; index += 1) { //in the for loop initialization, condition and increment in on one line
  if (Newnames[index] === 'Naveed') { // line 21 and 22 allows loop to omit Naveed but using continue
    continue;
  }

  let NewupperCaseName = Newnames[index].toUpperCase();
  NewupperNames.push(NewupperCaseName);
}

console.log(NewupperNames); 