// getting-started.js
const mongoose = require('mongoose');
const await=require('await');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/sourikart');
  console.log("connected");
}

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const sourikitty = new Kitten({ name: 'sourikitty' });
console.log(sourikitty.name); 

kittySchema.methods.speak = function speak() {
  const greeting = this.name
  console.log(greeting);
};

const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak();

await fluffy.save();
fluffy.speak();

const kittens = await Kitten.find();
console.log(kittens);

await Kitten.find({ name: /^fluff/ });