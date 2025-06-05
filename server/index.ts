import { createServer } from 'vite'
import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000

// Create Vite server in middleware mode
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'spa'
})

// Use vite's connect instance as middleware
app.use(vite.ssrFixStacktrace)
app.use(vite.middlewares)

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[express] serving on port ${PORT}`)
})