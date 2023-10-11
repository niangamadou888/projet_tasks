const faker = require('faker');
const { connectDatabase } = require('./db');

// Function to generate a random image URL from Lorem Picsum
function getRandomImageUrl() {
  const imageId = faker.random.number({ min: 1, max: 1000 });
  return `https://picsum.photos/200/200/?image=${imageId}`;
}

// Function to generate random products
function generateRandomProducts(count) {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = {
      name: faker.commerce.productName(),
      imageUrl: getRandomImageUrl(),
      amount: faker.random.number({ min: 5, max: 500, precision: 0.01 }),
      currency: faker.random.arrayElement(['USD', 'EUR', 'GBP']),
    };
    products.push(product);
  }
  return products;
}

// Function to insert random products into the database
async function insertRandomProducts() {
  const db = await connectDatabase();
  const randomProducts = generateRandomProducts(500);

  for (const product of randomProducts) {
    await db.query(
      'INSERT INTO products (name, imageUrl, amount, currency) VALUES (?, ?, ?, ?)',
      [product.name, product.imageUrl, product.amount, product.currency]
    );
  }

  console.log('500 random products inserted into the database.');
  db.end();
}

// Call the function to insert random products
insertRandomProducts();
