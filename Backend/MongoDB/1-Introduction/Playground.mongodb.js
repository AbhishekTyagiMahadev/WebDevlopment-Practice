// Select the database to use.
use('DummyDatabase');

// Insert a few documents into the sales collection.
db.getCollection('students').insertMany([
    {
      "name": "Abhishek Tyagi",
      "webDevStatus": "Learning"
    },
    {
      "name": "John Doe",
      "webDevStatus": "Intermediate"
    },
    {
      "name": "Jane Smith",
      "webDevStatus": "Expert"
    },
    {
      "name": "Alice Johnson",
      "webDevStatus": "Beginner"
    },
    {
      "name": "Bob Brown",
      "webDevStatus": "Advanced"
    }
  ]);

console.log('Documents inserted successfully!');
