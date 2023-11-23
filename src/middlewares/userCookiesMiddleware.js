const usersServices = require("../services/users-service");

async function userCookiesMiddleware(req, res, next) {
  res.locals.isLogged = false;

  const emailInCookie = req.cookies.userEmail;
  console.log("Valor de userEmail antes:", emailInCookie);

  const userFromCookie = await usersServices.getUserByEmail(emailInCookie);
  console.log(
    "Información de la cookie en el controlador:",
    req.headersSentCookies
  );

  if (userFromCookie) {
    req.session.userLogged = userFromCookie;
  }

  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
}

module.exports = userCookiesMiddleware;
