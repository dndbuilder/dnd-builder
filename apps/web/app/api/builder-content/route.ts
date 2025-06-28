import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("pageBuilder");

    // Get the latest content (assuming we only store one document for simplicity)
    const content = await db.collection("builderContent").findOne({}, { sort: { _id: -1 } });

    if (!content) {
      return NextResponse.json({ content: {} });
    }

    return NextResponse.json({ content: content.data });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { content } = await request.json();

    const client = await clientPromise;
    const db = client.db("pageBuilder");

    // Store the content
    await db.collection("builderContent").insertOne({
      data: content,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to save content" }, { status: 500 });
  }
}
