import Account from '../models/Account.js'

export const createAccount = async (req, res) => {
  const { accountNumber } = req.body

  const newAccount = await Account.create({
    accountNumber
  })

  res.status(201).json(newAccount)
}
