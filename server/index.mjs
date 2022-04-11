import { handler as ssrHandler } from "./dist/server/entry.mjs";

export async function handler(event) {
  console.log(`🚀 ${event.requestContext.http.method}: ${event.rawPath}`);

  return await ssrHandler(
    event,
    { host: (process.env.ARC_SANDBOX ? "http://localhost:3333" : null) },
  );
}
