#!/usr/bin/env node
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Starting frontend-only portfolio...');

const vite = spawn('npx', ['vite', '--port', '3000', '--host'], {
  stdio: 'inherit',
  cwd: __dirname
});

vite.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
});

vite.on('error', (err) => {
  console.error('Failed to start Vite:', err);
});