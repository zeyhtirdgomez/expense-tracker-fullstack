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

module.exports = {
    validateAmount,
    validateCategory
};