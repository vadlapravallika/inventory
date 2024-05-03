export const authConfig = {
    providers:[],
    pages: {
      signIn: "/signin",
      signUp: "/signup",
    },
    callbacks: {
      authorized({ auth, request }) {
        const isLoggedIn = auth?.user;
        const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
        const isLoad = request.nextUrl.pathname.startsWith("/");
        if (isOnDashboard || isLoad) {
          if (isLoggedIn) return true;
          return false;
        } else if (isLoggedIn) {
          return Response.redirect(new URL("/dashboard", request.nextUrl));
        }
        return true;
      },
    },
  };
  