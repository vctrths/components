import path from 'node:path'
import {$, Glob} from 'bun'
import {type Plugin, build} from 'esbuild'
import fs from 'node:fs'

const tsx = new Glob('src/**/*.tsx')
const entries = [...tsx.scanSync()]
const supportedLocales = new Set(['en-US'])

const externalize: Plugin = {
  name: 'externalize',
  setup(build) {
    Bun.write('dist/empty.js', '')
    Bun.write('dist/empty.d.ts', '')
    build.onResolve({filter: /.*/}, (args) => {
      if (args.kind === 'entry-point') return
      if (args.path.includes('.css')) return
      if (args.path.endsWith('.tsx') || args.path.endsWith('.ts'))
        return {
          path: `${args.path.slice(0, args.path.lastIndexOf('.'))}.js`,
          external: true
        }
      const base = path.basename(args.path, '.mjs')
      if (base.match(/[a-z]{2}-[A-Z]{2}/)) {
        if (!supportedLocales.has(base)) {
          return {path: path.resolve('dist/empty.js')}
        }
      }
      if (args.resolveDir.includes('node_modules')) {
        const folder = args.resolveDir
          .replaceAll('\\', '/')
          .split('node_modules/')[1]
        const segments = folder.split('/')
        const module = folder.startsWith('@')
          ? segments.slice(0, 2)
          : segments.slice(0, 1)
        modules.add(module.join('/'))
      }
    })
    const cssFiles: Array<string> = []
    let modules: Set<string>
    build.onStart(() => {
      modules = new Set()
    })
    build.onLoad({filter: /\.css$/}, (args) => {
      cssFiles.push(path.relative(process.cwd(), args.path).replaceAll('\\', '/'))
      return {contents: ''}
    })
    build.onEnd(async () => {
      const res = await build.esbuild.build({
        target: ['safari14'],
        stdin: {
          contents: `${cssFiles.map(path => `@import './${path}';`).join('\n')}`,
          loader: 'css',
          resolveDir: process.cwd(),
          sourcefile: 'index.css'
        },
        bundle: true,
        write: false
      })
      Bun.write('dist/index.css', res.outputFiles[0].text)
      const licenses = new Map<string, string>()
      for (const module of modules) {
        const target = path.join('node_modules', module)
        const pkg = JSON.parse(
          fs.readFileSync(path.join(target, 'package.json'), 'utf-8')
        )
        let licenseText: string = ''
        try {
          licenseText = fs.readFileSync(path.join(target, 'LICENSE'), 'utf-8')
        } catch {}
        if (!licenseText)
          try {
            licenseText = fs.readFileSync(
              path.join(target, 'LICENSE.md'),
              'utf-8'
            )
          } catch {}
        if (pkg.license) licenseText = `# ${pkg.license}\n\n${licenseText}`
        if (!licenseText) console.warn(`Missing license for module ${module}`)
        else {
          const prev = licenses.get(licenseText) ?? ''
          const pkgs = `${prev}\n- ${module}@${pkg.version}`
          licenses.set(licenseText, pkgs)
        }
      }
      const output = Array.from(licenses.entries(), ([license, pkgs]) => {
        return `${license}\n\nThis license applies to the following modules:\n${pkgs}`
      }).join('\n\n---\n\n')
      fs.writeFileSync(
        path.join(build.initialOptions.outdir!, 'LICENSES.md'),
        `This file contains the licenses of the bundled modules in this distribution.\n\n${output}`
      )
    })
  }
}

await $`rm -rf dist`

await build({
  format: 'esm',
  entryPoints: entries.filter(entry => !entry.includes('todo')),
  outdir: 'dist',
  bundle: true,
  splitting: true,
  plugins: [
    externalize
  ],
  external: [
    'react',
    'react-dom'
  ]
}).catch(() => process.exit(1))
