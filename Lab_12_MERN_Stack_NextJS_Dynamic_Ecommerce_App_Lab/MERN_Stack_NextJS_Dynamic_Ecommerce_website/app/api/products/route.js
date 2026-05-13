import { NextResponse } from "next/server";
import { allProducts } from "@/data/catalog";

export function GET() {
  return NextResponse.json({ products: allProducts });
}
