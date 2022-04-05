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
  // heh, this isn't going to work
  // but the idea is correct, convert API Gateway request to node request
  const incomingMessage = new IncomingMessage(req);
  const serverResponse = new ServerResponse(res);

  // Astro does receive the request, but it's not interop
  ssrHandler(incomingMessage, serverResponse, err => {
    if(err) {
      res.writeHead(500);
      res.end(err.toString());
    } else {
      res.writeHead(404);
      res.end();
    }
  });
}
