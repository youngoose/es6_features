"use strict"

let name = 'Eddy';

function makeUppercase(word){
  return word.toUpperCase();
}

let template =
`<h1>${makeUppercase('Hello')}, ${name}</h1>
<p>This is a simple template in JavaScript</p>`;
// very convenient function since does not need to '+' sign all the time... for concatenation

document.getElementById('template').innerHTML = template;
