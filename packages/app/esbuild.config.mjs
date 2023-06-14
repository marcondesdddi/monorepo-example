import { build } from "esbuild";
import aliasPath from "esbuild-plugin-path-alias";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const plugins = [
  aliasPath({
    "@/*": path.resolve(__dirname, "./src")
  })
];

build({
  plugins,
  logLevel: "info",
  platform: "node",
  packages: "external",
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/main.js",
  target: "es6"
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
