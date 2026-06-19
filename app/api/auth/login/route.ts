import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { comparePasswords } from "@/lib/auth";
import { signToken } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Find user
    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        {
          status: 401,
        }
      );
    }

    // Compare passwords
    const passwordMatch = await comparePasswords(
      password,
      user.password
    );

    if (!passwordMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        {
          status: 401,
        }
      );
    }

    // Generate JWT
    const token = signToken({
      id: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    // Response
    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful.",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      {
        status: 200,
      }
    );

    // Store JWT in HTTP-only cookie
    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Login Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      {
        status: 500,
      }
    );
  }
}