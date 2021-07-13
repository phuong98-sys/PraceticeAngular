var faker = require('faker')
var database = { tweets: [] };
for (var i = 1; i <= 10; i++) {
    database.tweets.push({
        id: i,
        name: faker.commerce.productName(),
        content: faker.lorem.sentences(),
        userName: faker.commerce.productName(),
        price: faker.commerce.price(),
        quantity: faker.random.words()

    });
}
console.log(JSON.stringify(database));