export default {
  async fetch(request, env) {
    try {
      let { pathname } = new URL(request.url);
      // Proxy requests through Cloudflare for certain paths
      const allowedPaths = ["/api", "/redoc", "/docs", "/_admin", "/open-api"];
      const homeRoute = "/";

      if (pathname === homeRoute){
        pathname = "/redoc";
      }

      if (allowedPaths.some(prefix => pathname.startsWith(prefix))) {
        //NOTE: To Modify request headers use cloudflare rules
        return await fetch(request)
      }
      // Return a 404 Not Found response for other paths
      const message_err = {'message': 'URL not Found'};
      return new Response(JSON.stringify(message_err), { status: 404 })
    } catch(e) {
      // Return a 500 Internal Server Error response for errors
      const message_err = {'message': 'There was a problem routing your request'}
      return new Response(JSON.stringify(message_err), { status: 500 })
    }
  }
}