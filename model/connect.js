//Code written by Brandon Twede and copied from the MongoDB website
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Rachel:PnXCNKvKQYMjl6BX@cluster0.il1zhzo.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("ProfessionalDatabase");
    const collection = database.collection("Professional");
    const query = { };

    // Execute query
    const data = await collection.findOne(query);
    return data;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = { run };
