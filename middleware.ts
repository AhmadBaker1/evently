import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
    /* Set public routes so that users who arent logged in 
    can visit specific routes
    */
   publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
],
    // Clerk ignoring some routes:
    ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
    ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 