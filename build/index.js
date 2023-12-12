'use strict'
// npm install @types/express -D -> Para solucionar los temas de importacion al no haber types
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
// npm install ts-node-dev -D -> parecido a nodemon para mostrar los cambios pero usando "npm run dev" se prende/reinicia el server y nos muestra los cambios tal cual nodemon
const express_1 = __importDefault(require('express'))
const app = (0, express_1.default)()
app.use(express_1.default.json())
const PORT = 3000
app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!' + new Date().toLocaleDateString())
  res.send('pong')
})
app.listen(PORT, () => {
  console.log(`Server runnin on port ${PORT}`)
})
