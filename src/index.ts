import express from "express";
import bodyParser from "body-parser";
import router from "./routes/api";
import mongoose, { MongooseError } from "mongoose";

// TODO: should seperate into other files, such as env.ts
const PORT = 3000;
const DATABASE_URL =
  "belajar-backend-nodejs.tmx9ngi.mongodb.net/?retryWrites=true&w=majority&appName=belajar-backend-nodejs";
const DATABASE_USERNAME = "agungrizkyanabiz";
const DATABASE_PASSWORD = "tLYKOh8LdS1v3NeC";

// TODO: should seperate into other files, such as database.ts
async function db() {
  try {
    const connectionUrl = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_URL}`;
    await mongoose.connect(connectionUrl, {
      dbName: "sanber-be-60",
    });
    console.log("successful connect to database.");
  } catch (error) {
    const err = error as unknown as MongooseError;
    throw new Error(err.message);
  }
}

async function main() {
  const app = express();

  await db();

  app.use(bodyParser.json());

  app.use("/api", router);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

main();
