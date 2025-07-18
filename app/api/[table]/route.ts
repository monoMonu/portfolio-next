import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

const allowedRoutes = ['projects', 'experiences', 'skills', 'about'];

export const GET = async (
   req: NextRequest,
   { params }: { params: Promise<{ table: string }> }
) => {
   const { table } = await params;

   if (!allowedRoutes.includes(table)) {
      return new NextResponse("Not Found", { status: 404 });
   }

   try {
      const { rows: data } = await db.query(`
            SELECT * FROM ${table};
         `)

      return NextResponse.json({ success: true, data });
   } catch (error) {
      console.error("API Error:", error);
      return new NextResponse("Internal Server Error", { status: 500 });
   }
};