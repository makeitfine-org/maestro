import colors from 'colors'

export function reqTime(req, res, next) {
    req.requestTime = Date.now()
    next()
}

export function log(req, res, next) {
    console.log(colors.bgYellow.blue(`req time: ${req.requestTime}`))
    next()
}
