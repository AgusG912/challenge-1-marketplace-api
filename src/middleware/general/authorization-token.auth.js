const headerKey = 'x-authorization-token'
const headerToken = process.env.AUTHORIZATION_TOKEN

export const authorization = (req, res, next) => {
    if ((req.headers[headerKey] || '') !== headerToken) {
        return res.status(404).send('Not Found');
    }
    next();
};