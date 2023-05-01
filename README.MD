
# EOD Stock API - Cloudflare Workers API Gateway Router


The router is designed to proxy requests through Cloudflare for certain paths, 
while returning a 404 Not Found response for other paths.

## Functionality
The router is set up to allow requests to the following paths:

- /api
- /redoc
- /docs
- /_admin
- /open-api

For requests to these paths, the router will proxy the request through Cloudflare. 
Requests to other paths will result in a 404 Not Found response.

Additionally, if the request is for the home route ("/"), the router will redirect the request to the /redoc path.

## Usage
To use this Cloudflare Workers Gateway router, copy the code from this file and paste it into your Cloudflare Workers script.

Once you have pasted the code into your script, you can customize the allowed paths as needed by modifying the allowedPaths array.

Note that to modify request headers, you will need to use Cloudflare rules.

## Error Handling
If there is an error when routing a request, the router will return a 500 Internal Server Error response with the message "There was a problem routing your request".


## Community

- [Slack Channel](https://join.slack.com/t/eod-stock-apisite/shared_invite/zt-1uelcf229-c_6QAgWFNyVfXKZr1hYYoQ)
- [StackOverflow](https://stackoverflowteams.com/c/eod-stock-market-api)
- [Quora](https://eodstockmarketapi.quora.com/)
