import sequelize from '../db/dbConnection.js'
import { DataTypes } from 'sequelize'

const Account = sequelize.define('Account', {
  account_number: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'accounts',
  timestamps: true
}
)

export default Account
