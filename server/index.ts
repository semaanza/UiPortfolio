import { createServer } from 'vite'

async function startServer() {
  const vite = await createServer({
    server: { 
      port: 5000,
      host: '0.0.0.0'
    }
  })
  
  await vite.listen()
  console.log('[vite] server started on port 5000')
}

startServer().catch(console.error)