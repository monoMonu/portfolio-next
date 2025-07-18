import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
   const response = NextResponse.next();

   // if (req.method === 'GET' && req.headers.get('user-agent')?.includes('Mozilla')) {
   //    return new NextResponse("Not Found", { status: 404 });
   // }

   return response;
}

export const config = {
   matcher: "/api/:path*",
};
