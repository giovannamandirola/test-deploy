import express from 'express'

import accountRoutes from './src/routes/accountRoutes.js'
import sequelize from './src/db/dbConnection.js'

sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos sincronizada')
  })
  .catch((err) => {
    console.error('Error al sincronizar la base de datos:', err)
  })

const app = express()
const port = process.env.APP_PORT || 3000

app.get('/health', (req, res) => {
  res.send('OK')
})

app.get('/env', (req, res) => {
  res.send(process.env.ENV)
})

app.use('/api/account', accountRoutes)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
