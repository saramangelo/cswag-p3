const db = require('../config/connection');
const { User, Ticket } = require('../models');
const { faker } = require('@faker-js/faker');

const priorities = ['High','Med','Low'];

const randomPriority = () => {
  return priorities[Math.floor(Math.random() * priorities.length)];
}

db.on('error', (err) => err);

db.once('open', async () => {
  await User.deleteMany({});
  await Ticket.deleteMany({});

  const users = [];

  for(var i=0; i<20; i++){
    let user = {
        "username": faker.internet.userName(),
        "email": faker.internet.email(),
        "password": faker.internet.password(10),
        "tickets": []
    }
    
    for(var j=0; j<5; j++){
      let ticket = {
        "ticketTitle": faker.lorem.sentence(2),
        "ticketBody": faker.lorem.sentence(),
        "ticketAuthor": user.username,
        "ticketPriority": randomPriority()
      }

      const insertedTicket = await Ticket.collection.insertOne(ticket);

      user.tickets.push(insertedTicket.insertedId);
    }

    users.push(user);
  }

  const  await User.collection.insertMany(users);
  

  console.log('Database seeded!');
  process.exit(0);
});