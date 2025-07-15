import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
   const response = NextResponse.next();

   // CORS headers
   response.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
   response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
   response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

   // OPTIONS preflight global handling
   if (request.method === "OPTIONS") {
      return new NextResponse(null, {
         status: 204,
         headers: response.headers,
      });
   }

   return response;
}

export const config = {
   matcher: "/api/:path*",
}
