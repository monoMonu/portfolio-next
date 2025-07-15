import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
   try {
      const result = await db.query('SELECT * FROM projects');
      return NextResponse.json(result.rows);
   } catch (error) {
      console.log(error);
      NextResponse.json(error);
   }
}