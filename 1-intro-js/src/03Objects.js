const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'John',
        lastName: 'Doe'
    },
    items: [
        {
            product: 'keyboard',
            price: 399,
            quantity: 2
        },
        {
            product: 'mouse',
            price: 200,
            quantity: 1
        }

    ],

    total: function() {
        let total = 0;
        this.items.forEach(item => {total = total + (item.price * item.quantity)});
        return total;
    },
    greeting: function() {return `Hola ${this.client.name}`}

};

invoice.client.name = 'Pepe';

console.log(invoice);
console.log(invoice.name);

console.log(invoice.greeting());
console.log(invoice.total());
