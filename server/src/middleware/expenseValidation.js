const validateAmount = (req, res, next) => {
    const { amount } = req.body;

    // Check whether amount exists
    if (amount === undefined || amount === null || amount === "")
        return res.status(400).json({ message: "Amount is required." });

    // Check whether amount is a number
    if (isNaN(amount))
        return res.status(400).json({ message: "Amount must be a number." });

    // Convert amount to number
    req.body.amount = Number(amount);

    // Check whether amount is non-negative
    if (req.body.amount < 0)
        return res.status(400).json({
            message: "Amount cannot be negative."
        });

    next();
};

const validateCategory = (req, res, next) => {
    const { category } = req.body;

    // Check whether category exists
    if (!category || category.trim() === "")
        return res.status(400).json({
            message: "Category is required."
        });

    next();
};

const updateAmountValidation = (req, res, next) => {
    // Check whether
    const amount = req.body.amount;
    if (amount === undefined)
        return next();

    if (amount === null || isNaN(amount))
        return res.status(400).json({message : "Amount must be a number."});
    
    if (amount < 0)
        return res.status(400).json({message : "Amount cannot be negative."});
    req.body.amount = Number(amount);
    return next();
};

module.exports = {
    validateAmount,
    validateCategory,
    updateAmountValidation,
};