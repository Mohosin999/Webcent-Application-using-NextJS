import { clerkClient } from "@clerk/clerk-sdk-node";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { credit, userId } = await req.json();

    if (!credit || !userId) {
      return NextResponse.json(
        { error: "Missing credit or userId in the request body" },
        { status: 400 }
      );
    }

    // Update the Clerk user's public metadata
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: { credit },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error updating metadata:", error);
    return NextResponse.json(
      { error: "Failed to update metadata" },
      { status: 500 }
    );
  }
}
