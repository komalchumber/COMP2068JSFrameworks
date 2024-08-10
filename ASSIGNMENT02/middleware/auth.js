const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

const ensureRole = (role) => {
    return (req, res, next) => {
        if (req.user && req.user.role === role) {
            return next();
        } else {
            res.redirect('/login');
        }
    };
};

const ensureAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.redirect('/login'); 
    }
};


   


module.exports = {
    ensureAuthenticated,
     ensureAdmin,
    ensureRole
};
