const index = (req, res, next) => {
    res.render('index', {title: 'Express', firstName: 'Afolabi'})
}

const index2 = (req, res, next) => {
    res.render('index', {title: 'Express', firstName: 'Jude'})
}

module.exports = {
    index, index2
}
