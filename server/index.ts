import { exec } from 'child_process'

console.log('Starting frontend-only portfolio...')
const viteProcess = exec('npx vite --port 5000 --host 0.0.0.0', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`)
    return
  }
  console.log(stdout)
  if (stderr) console.error(stderr)
})

viteProcess.stdout?.pipe(process.stdout)
viteProcess.stderr?.pipe(process.stderr)

process.on('SIGTERM', () => viteProcess.kill())
process.on('SIGINT', () => viteProcess.kill())