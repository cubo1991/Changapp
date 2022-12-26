const { Router } = require("express");
const UserLoginController = require("../controllers/UserLoginController");
const UserController = require("../controllers/UserController");
const { AUTH0_TENANT_ID, AUTH0_CLIENT_ID } = process.env;

const router = Router();

router.post("/login", async (req, res, next) => {
  const { event } = req.body;

  // console.log(event);

  // Chequeamos que la request sea fidedigna con TENANT y CLIENT
  // Y contenga user
  if (
    event?.tenant?.id !== AUTH0_TENANT_ID ||
    event?.client?.client_id !== AUTH0_CLIENT_ID ||
    !event.user
  )
    return res.status(401).send();

  // Chequeamos que la request tenga user y user_id
  const { user_id, email } = event.user;
  if (!user_id || !email) return res.status(400).send();

  let [loginStrategy, loginId] = user_id.split("|");

  if (loginStrategy !== "auth0") {
    // No inicio sesion a traves de la BD nuestra,
    // deberemos buscar el userId en UserLogins

    // BUSCAMOS USER_ID en UserLogins
    try {
      loginId = await UserLoginController.find(user_id);
    } catch (error) {
      console.error("POST /users/login UserLoginController.find error");
      return next(error);
    }
  }

  if (!loginId) {
    // No se encontro userLogin, veamos si existe el e-mail
    try {
      let user = await UserController.findByEmail(email);

      if (!user) {
        // No existe el usuario
        // Crear User
        user = await UserController.add(event.user);
      }
      loginId = user.id;

      // Debemos crear un nuevo UserLogin
      await UserLoginController.add({
        UserId: loginId,
        oauth_id: user_id,
      });
    } catch (error) {
      console.error(
        "POST /users/login UserController.findByEmail/add or UserLoginController.add error"
      );
      return next(error);
    }
  }

  // Actualizamos datos personales segun perfil
  try {
    const user = await UserController.update(loginId, event.user);
  } catch (error) {
    console.error("POST /users/login UserController.update error");
    return next(error);
  }

  // Devolvemos el rol
  try {
    const user_role = await UserController.getUserRole(loginId);

    return res.status(201).json({ user_role });
  } catch (error) {
    console.error("POST /users/login UserController.getUserRole error");
    next(error);
  }
});

router.put("/:id/role", async (req, res, next) => {
  const { user_role } = req.body;
  const { id } = req.params;

  if (!user_role) return res.status(400).send();

  try {
    await UserController.setUserRole(id, user_role);
    return res.status(200).json({ status: "Rol modificado" });
  } catch (error) {
    // atrapamos el error personalizado del controlador
    // mandamos un Bad Request con el mensaje de error
    if (error.name === "UserRoleNotFound")
      return res.status(400).json({ error: error.message });

    console.error("PUT /users/set-role/:id UserController.setUserRole error");
    next(error);
  }
});

module.exports = router;
