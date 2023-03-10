export default {
  async fetch(request, env) {
    try {
      const { pathname } = new URL(request.url);
      // Proxy requests through Cloudflare for certain paths
      if (pathname.startsWith("/api") || pathname.startsWith("/_admin") || pathname.startsWith("/open-api")) {
        // Create a new request that shows it is coming from Cloudflare
        const cfRequest = new Request(request);
        cfRequest.headers.set("CF-Connecting-IP", request.headers.get("CF-Connecting-IP"));
        // Fetch the resource from the origin server
        // Return the response to the client
        return await fetch(cfRequest);
      }
      // Return a 404 Not Found response for other paths
      const message_err = {'message': 'URL not Found'}
      return new Response(JSON.stringify(message_err), { status: 404 })
    } catch(e) {
      // Return a 500 Internal Server Error response for errors
      const message_err = {'message': 'There was a problem routing your request'}
      return new Response(JSON.stringify(message_err), { status: 500 })
    }
  }
}
