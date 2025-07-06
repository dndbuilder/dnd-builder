import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import clientPromise from "./mongodb";

export async function registerUser({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  try {
    // Validate input
    if (!firstName || !lastName || !email || !password) {
      throw new Error("Missing required fields");
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const usersCollection = client.db(process.env.DB_NAME).collection("users");

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const result = await usersCollection.insertOne({
      name: `${firstName} ${lastName}`,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return {
      id: result.insertedId.toString(),
      name: `${firstName} ${lastName}`,
      email,
    };
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}
