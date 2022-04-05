import arc from '@architect/functions';
import { IncomingMessage, ServerResponse } from 'http';
import { handler as ssrHandler } from '../dist/server/entry.mjs';

async function server (request, response) {
  console.log('REQUEST', request);
  console.log('RESPONSE', response);

  /**
   * @type {IncomingMessage}
  */
  const req = {
  }

  /**
   * @type {ServerResponse}
  */
  const res = {}

  ssrHandler(req, res, err => {
    if(err) {
      res.writeHead(500);
      res.end(err.toString());
    } else {
      res.writeHead(404);
      res.end();
    }
  });
}

// export const handler = arc.http.async(server);

export async function handler(req, res) {
  const incomingMessage = new IncomingMessage(req);
  const serverResponse = new ServerResponse(res);

  ssrHandler(incomingMessage, serverResponse, err => {
    if(err) {
      res.writeHead(500);
      res.end(err.toString());
    } else {
      res.writeHead(404);
      res.end();
    }
  });

  // return {
  //   statusCode: 200,
  //   headers: {
  //     'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
  //     'content-type': 'text/html; charset=utf8'
  //   },
  //   body: `hi`
  // }
}
