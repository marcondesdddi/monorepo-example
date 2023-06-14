require('esbuild').build({
  logLevel: 'info',
  platform: 'node',
  packages: 'external',
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/main.js',
  target: 'es6'
}).catch((error) => {
  console.error(error)
  process.exit(1)
})
