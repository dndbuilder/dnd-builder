import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Check if the path is a protected route
  const isProtectedRoute = ['/builder', '/preview'].some(route => 
    path === route || path.startsWith(`${route}/`)
  );

  if (isProtectedRoute) {
    // Get the token from the request
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // If the user is not authenticated, redirect to the login page
    if (!token) {
      const url = new URL('/login', request.url);
      // Add the current path as a redirect parameter
      url.searchParams.set('callbackUrl', encodeURI(request.url));
      return NextResponse.redirect(url);
    }
  }

  // Continue with the request if the user is authenticated or the route is not protected
  return NextResponse.next();
}

// Configure the middleware to run only on specific paths
export const config = {
  matcher: ['/builder/:path*', '/preview/:path*'],
};