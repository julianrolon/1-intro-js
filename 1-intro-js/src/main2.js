const average = 5.9;
const status = (average >= 5.5) ? 'Aproved' : 'Rechazado';
console.log(`Resultado: ${status}`);

const httpclient = fetch('https://jsonplaceholder.typicode.com/users');
//httpclient.then(console.log);
httpclient.then(response => response.json().then(console.log));