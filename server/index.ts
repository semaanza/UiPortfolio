import { createServer } from 'vite'

async function startServer() {
  const vite = await createServer({
    server: { 
      port: 5000,
      host: '0.0.0.0',
      strictPort: true,
      open: false
    },
    preview: {
      port: 5000,
      host: '0.0.0.0'
    }
  })
  
  await vite.listen()
  
  vite.printUrls()
  console.log(`Portfolio server ready at http://0.0.0.0:5000`)
}

startServer().catch((error) => {
  console.error('Failed to start server:', error)
  process.exit(1)
})