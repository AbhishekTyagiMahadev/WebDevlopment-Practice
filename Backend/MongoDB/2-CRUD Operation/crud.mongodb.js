use("webDevlopment-Practice")

db.createCollection("CRUD")

// Create documents
// Inserting one document
// db.CRUD.insertOne({
//     name: "Rahul",
//     age: 23,
//     city: "Delhi"
// })

// Inserting multiple documents
db.CRUD.insertMany([
    {
        name: "Rohit",
        age: 24,
        city: "Mumbai"
    },
    {
        name: "Raj",
        age: 25,
        city: "Bangalore"
    },
    {
        name: "Ravi",
        age: 26,
        city: "Chennai"
    },
    {
        name: "Rahul",
        age: 27,
        city: "Kolkata"
    }
])

// Read documents
// let a = db.CRUD.find({age: 24})
// console.log(a.toArray())

// let b = db.CRUD.findOne({age: 24})
// console.log(b)

// Update documents
db.CRUD.updateOne({name: "Rahul"}, {$set: {age: 30}})

db.CRUD.updateMany({name: "Rahul"}, {$set: {age: 30}})

// Delete Documents
// db.CRUD.deleteOne({name: "Rahul"})

// db.CRUD.deleteMany({age : {$lt: 25}})