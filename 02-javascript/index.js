'use strict';

console.log(`
2.
---

Take a look at the 'requester' function.

- What it does?
- How it's used? Add different use-case examples that covers every functionality.
- How it is called this design pattern or technique?

HINT: Use https://api.github.com/users/mediastream
`);

// Add fetch polyfill for Node.js
require('isomorphic-fetch'); // See: https://github.com/matthew-andrews/isomorphic-fetch
require('es6-promise').polyfill();

function requester(method, base, headers = { Accept: '*/*' }) {
  return (path = []) => fetch((base ? [base, ...path] : path).join('/'), { method, headers })
    .then(r => r.json());
}

//este codigo es un llamado al contenido de la API
//la funcion recibe el metodo o verbo html, y responde en base a este
//base, hace referencia a la url base de la api
//headers, son los headers que se le pasaran para definir el timpo de contenido que se esta requiriendo
