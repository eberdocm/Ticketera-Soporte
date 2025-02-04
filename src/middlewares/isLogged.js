function isLogged(req, res, next) {
   if(req.cookies.logged){
    next();
   } else {
    res.redirect("/login");
   };
   
}

module.exports = isLogged;
