// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { loadEnv } from "vite";

// The asset proxy plugin inside @lovable.dev/vite-tanstack-config reads
// process.env.LOVABLE_PREVIEW_HOST synchronously while building the plugin
// list, which happens before Vite's own .env loading runs. Load .env files
// here first so LOVABLE_PREVIEW_HOST (e.g. from .env.local) is already in
// process.env by the time defineConfig below constructs the plugins.
Object.assign(process.env, loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), ""));

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Building with `DEPLOY_TARGET=vps` targets a plain Node.js server instead of
  // the default Cloudflare Workers build, so the output can run under a VPS
  // process manager (e.g. aaPanel + PM2). Leaving DEPLOY_TARGET unset keeps the
  // existing Cloudflare/Vercel build behavior unchanged.
  nitro: {
    preset: process.env.DEPLOY_TARGET === "vps" ? "node-server" : undefined,
  },
});
