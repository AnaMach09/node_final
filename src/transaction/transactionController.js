const Transaction = require('../database/transaction.model');
const User = require('../database/user.model');

const debit = async (req, res) => {
  const userId = req.params.userId;
  const amount = parseFloat(req.params.amount);

  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (amount <= 0) {
    return res.status(400).json({ message: 'Invalid amount' });
  }

  await user.update({ balance: parseFloat(user.balance) + amount });

  const transaction = await Transaction.create({
    userId,
    type: 'DEBIT',
    amount,
  });

  res.json({ message: 'Debit successful', transaction });
};


module.exports = debit;