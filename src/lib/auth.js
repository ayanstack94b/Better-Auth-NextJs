import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI);

// let db;
// await client.connect(); 

async function getDB() {
  if (!client.topology?.isConnected()) {
    await client.connect();
  }
  return client.db();
}

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(await getDB(), {
    client,
  }),
});
