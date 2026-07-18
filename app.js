const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    message: 'Core Digital Services Platform',
    version: '1.0.0',
    status: 'healthy'
  })
})

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
})

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`)
  console.log(`Health check available at http://localhost:${PORT}/health`)
})