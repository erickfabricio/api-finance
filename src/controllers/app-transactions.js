const Transaction = require('../models/app-transactions');

module.exports = {

    find: async (req, res, next) => {
        const transactions = await Transaction.find(req.body.query, req.body.parms).sort('-date');
        res.status(200).json(transactions);
    },

    findById: async (req, res, next) => {
        const { transactionId } = req.params;
        const transaction = await Transaction.findById(transactionId);
        res.status(200).json(transaction);
    },

    save: async (req, res, next) => {
        const newTransaction = new Transaction(req.body);
        const transaction = await newTransaction.save();
        res.status(200).json(transaction);
    },

    update: async (req, res, next) => {
        const { transactionId } = req.params;
        const newTransaction = req.body;
        const oldtransaction = await Transaction.findByIdAndUpdate(transactionId, newTransaction, { useFindAndModify: false });
        res.status(200).json({ success: true });
    },

    remove: async (req, res, next) => {
        const { transactionId } = req.params;
        await Transaction.findByIdAndRemove(transactionId);
        res.status(200).json({ success: true });
    }

}