const server = require("./src/app.js");
const { conn, UserRol, User } = require("./src/db.js");

const Users = [
  {
    UserName: "Nicolas",
    PassWord: "1234",
    Age: 4,
  },
];

const rols = [
  {
    name: "User",
  },
  {
    name: "Admin",
  },
  {
    name: "SuperAdmin",
  },
];

conn
  .sync({ force: true })
  .then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001");
    });
  })
  .then(async () => {
    rols.forEach((rol) => UserRol.create(rol));
    
    const rolPrueba = await UserRol.create({
      name: "prueba"
    });
    //console.log(rolPrueba);
    const user = await User.create({
      userName: "Nicolas",
      passWord: "1234",
      age: 4,
    });

    await user.setUserRol(rolPrueba)
    
  })
  .then(async () => {
    //console.log(roles);
    //await user.setRol_id(result)
  }); 
