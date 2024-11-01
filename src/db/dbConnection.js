import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',  
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL using Sequelize')
  })
  .catch((err) => {
    console.error('Error connecting to MySQL:', err)
  })

export default sequelize
