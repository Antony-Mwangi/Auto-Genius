import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export interface TokenPayload extends JwtPayload {
  id: string;
  email: string;
  role: "customer" | "admin";
}

export function signToken(payload: Omit<TokenPayload, keyof JwtPayload>) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
}