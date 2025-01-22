Sample code including db password for mongoDB:
```
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://josue:armadanube@dbarmadanube.58yfc.mongodb.net/?retryWrites=true&w=majority&appName=DBarmadanube";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
```


### Logs
## 2nd commit
sending this to http://localhost:5000/auth/register registered a user successfully. 
```
{
"email": "pilou@gmail.com",
"password": "saby",
"firstname": "pilou",
"lastname": "saby"
}
```