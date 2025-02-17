import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";

export async function GET() {
  try {
    await connectMongo();
    return NextResponse.json({ message: "Database connected successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}
