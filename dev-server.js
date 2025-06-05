#!/usr/bin/env node
import { spawn } from 'child_process'

const vite = spawn('npx', ['vite', '--port', '5000', '--host', '0.0.0.0'], {
  stdio: 'inherit',
  shell: true
})

process.on('SIGTERM', () => vite.kill())
process.on('SIGINT', () => vite.kill())