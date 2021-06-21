import express from 'express'

const port = 3000
const app = express()

app.get('/test', (req, res) => {
  return res.send('Olá Mundo!')
})

app.post('/test-post', (req, res) => {
  return res.send('Olá post')
})

app.listen(port, () => console.log(`Server running on localhost:${port}`))