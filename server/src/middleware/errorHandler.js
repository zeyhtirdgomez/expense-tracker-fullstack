const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Invalid MongoDB ObjectId
    if (err.name === "CastError") {
        return res.status(400).json({
            message: "Invalid expense ID."
        });
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
        return res.status(400).json({
            message: err.message
        });
    }

    // Unexpected server error
    return res.status(500).json({
        message: "Internal server error"
    });
};

module.exports = errorHandler;