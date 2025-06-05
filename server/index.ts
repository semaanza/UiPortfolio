import { createServer } from 'vite'

async function startServer() {
  const server = await createServer({
    server: {
      port: 5000,
      host: '0.0.0.0',
      allowedHosts: 'all'
    }
  })
  
  await server.listen()
  server.printUrls()
  console.log('Frontend-only portfolio ready for Netlify deployment!')
}

startServer().catch(console.error)