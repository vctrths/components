import {execSync} from 'node:child_process'
import {write} from 'bun'
// @ts-ignore
import pkg from './package.json'

const semver = process.argv[2]
if (!semver) {
  console.log('Usage: bun release <semver>')
} else {
  const version = semver.startsWith('v') ? semver : `v${semver}`
  pkg.version = semver.slice(1)
  await write('package.json', `${JSON.stringify(pkg, null, 2)}\n`)
  execSync('git add .', {stdio: 'inherit'})
  execSync(`git commit -m "${version}"`, {stdio: 'inherit'})
  execSync(`git tag -a ${version} -m "${version}"`, {stdio: 'inherit'})
  execSync('git push --follow-tags', {stdio: 'inherit'})
  console.log(`Bumped version to ${semver}`)
}
