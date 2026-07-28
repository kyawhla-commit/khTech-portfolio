import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const serverDirectory = resolve("dist/server");
const serverEntry = resolve(serverDirectory, "index.js");

const workerSource = `const GITHUB_PAGES_PREFIX = "/khTech-portfolio";

const withPathname = (request, pathname) => {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url, request);
};

export default {
  async fetch(request, env) {
    if (!env.ASSETS) {
      return new Response("Static assets binding is unavailable.", { status: 503 });
    }

    const url = new URL(request.url);
    let pathname = url.pathname;

    if (pathname === GITHUB_PAGES_PREFIX || pathname === \`\${GITHUB_PAGES_PREFIX}/\`) {
      pathname = "/index.html";
    } else if (pathname.startsWith(\`\${GITHUB_PAGES_PREFIX}/\`)) {
      pathname = pathname.slice(GITHUB_PAGES_PREFIX.length);
    } else if (pathname === "/") {
      pathname = "/index.html";
    }

    const assetResponse = await env.ASSETS.fetch(withPathname(request, pathname));
    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    const acceptsHtml = request.headers.get("accept")?.includes("text/html");
    if (request.method === "GET" && acceptsHtml) {
      return env.ASSETS.fetch(withPathname(request, "/index.html"));
    }

    return assetResponse;
  },
};
`;

await mkdir(serverDirectory, { recursive: true });
await writeFile(serverEntry, workerSource, "utf8");
console.log(`Created Sites worker entry at ${serverEntry}`);
