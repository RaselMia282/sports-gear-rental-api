const notFound = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: 'API Route Not Found!',
        error: {
            path: req.originalUrl,
            message: 'Your requested path does not exist on this server.',
        },
    });
};
export default notFound;
//# sourceMappingURL=notFound.js.map