// npm install @types/express -D -> Para solucionar los temas de importacion al no haber types

// npm install ts-node-dev -D -> parecido a nodemon para mostrar los cambios pero usando "npm run dev" se prende/reinicia el server y nos muestra los cambios tal cual nodemon

// npm install ts-standard -D

import express from 'express'

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server runnin on port ${PORT}`)
})
