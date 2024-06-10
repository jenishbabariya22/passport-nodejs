const index = (req,res) => {
    return res.render('login')
}

const loginUser = (req,res) => {
    return res.redirect('/dashboard')
}

const dashboard = (req, res) => {
    return res.render('dashboard')
}

module.exports = {
    index, dashboard, loginUser
}