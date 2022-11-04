import { basicAuth } from "https://deno.land/x/basic_auth@v1.1.1/mod.ts";
import { MiddlewareHandlerContext } from "$fresh/server.ts";

const user = "riahope";
const pass = "midsummer";

export async function handler<T>(
  req: Request,
  ctx: MiddlewareHandlerContext<T>
) {
  // Require HTTP basic authentication
  const unauthorized = basicAuth(req, "Ria Hope", { [user]: pass });
  if (unauthorized) return unauthorized;

  return await ctx.next();
}
