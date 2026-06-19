import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { verifyToken } from "@/lib/jwt";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    // Read the token cookie
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Not authenticated.",
        },
        {
          status: 401,
        }
      );
    }

    // Verify JWT
    const decoded = verifyToken(token);

    // Find the latest user data
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        user,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Auth Me Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Invalid or expired token.",
      },
      {
        status: 401,
      }
    );
  }
}