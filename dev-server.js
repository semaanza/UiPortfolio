import { createServer } from 'vite'

const server = await createServer({
  configFile: './vite.config.ts',
  server: {
    port: 5000,
    host: '0.0.0.0'
  }
})

await server.listen()
server.printUrls()