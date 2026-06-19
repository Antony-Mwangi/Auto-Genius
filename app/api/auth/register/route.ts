import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { hashPassword } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const { name, email, password } = body;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Check if email already exists
    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "An account with this email already exists.",
        },
        {
          status: 409,
        }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: "customer",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully.",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

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