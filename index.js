const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.VITE_name}:${process.env.VITE_password}@cluster0.fjsqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const languageDB = client.db("languageDB");
    const tutorial = languageDB.collection("tutorial");
    app.post("/add", async (req, res) => {
      const data = req.body;
      const result = await tutorial.insertOne(data);
      res.send(result);
    });

    app.get("/allTutors", async (req, res) => {
      const result = await tutorial.find().toArray();
      res.send(result);
    });
    app.get("/find-tutors/:category", async (req, res) => {
      const category = req.params.category;
      const quary = {
        language: category,
      };
      const result = await tutorial.find(quary).toArray();
      res.send(result);
    });
    // teacher details
    app.get("/details/:id", async (req, res) => {
      const id = req.params.id;
      const quary = {
        _id: new ObjectId(id),
      };
      const result = await tutorial.findOne(quary);
      res.send(result);
    });
    // my tutorial
    app.get("/my-tutorial/:email", async (req, res) => {
      const email = req.params.email;
      const quary = {
        email: email,
      };
      const result = await tutorial.find(quary).toArray();
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("helo");
});
app.listen(port);
