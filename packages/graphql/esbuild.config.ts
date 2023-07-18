import { build } from "esbuild"
import aliasPath from "esbuild-plugin-path-alias"
import path from "path"
import glob from "tiny-glob"

const plugins = [
  aliasPath({
    "@/*": path.resolve(__dirname, "./src")
  })
]

;(async function () {
  const entryPoints = await glob("src/**/*.ts")

  build({
    plugins,
    logLevel: "info",
    platform: "node",
    packages: "external",
    entryPoints,
    bundle: true,
    minify: false,
    outdir: "dist",
    target: "es6"
  }).catch((error) => {
    console.error(error)
    process.exit(1)
  })
})()
