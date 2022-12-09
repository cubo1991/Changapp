const { Router } = require("express");
const router = Router();
const { Detail,  User, UserRol} = require("../db.js");

router.get("/", async (req, res) => {
  const { id } = req.query;

  try {
    if(id){
        let result = await User.findAll({
          where: {
            id: id,
          },
          include: [
            { model: Detail }, 
            { model: UserRol }
        ],
        });
        res.status(200).json(result)
    } else {
        let result = await User.findAll({
            include: [
                { model: Detail }, 
                { model: UserRol }
            ],
        })
        res.status(200).json(result)
    }
  } catch (error) {
    res.status(500).send("Hubo un error en el servidor")
  }
});

router.put("/", async (req, res) => {
  const { id, userName, passWord, age, location, adress, phoneNumber, eMail, rol } = req.body;
  try {
    const userBD = await User.findAll({
        where: {
            id: id
        },
    })

    //Update User
    if (userName) {
        await User.update({
            userName: userName,
        }, {
            where: {
                id : id
            }
        })
    }
    if (passWord) {
        await User.update({
            passWord: passWord,
        }, {
            where: {
                id : id
            }
        })
    }
    if (age) {
        await User.update({
            age: age,
        }, {
            where: {
                id : id
            }
        })
    }
    //Update Details
    if (location) {
        await Detail.update({
            location: location,
        }, {
            where: {
                id : userBD[0].dataValues.DetailId
            }
        })
    }
    if (adress) {
        await Detail.update({
            adress: adress,
        }, {
            where: {
                id : userBD[0].dataValues.DetailId
            }
        })
    }
    if (phoneNumber) {
        await Detail.update({
            phoneNumber: phoneNumber,
        }, {
            where: {
                id : userBD[0].dataValues.DetailId
            }
        })
    }
    if (eMail) {
        await Detail.update({
            eMail: eMail,
        }, {
            where: {
                id : userBD[0].dataValues.DetailId
            }
        })
    }
    //Update rol
    if (rol) {
        if(userBD[0].dataValues.UserRolId === 4){
            let rolDB = await UserRol.findAll({
                where: {
                    name : rol
                }
            })
            await User.update({
                UserRolId: rolDB[0].dataValues.id,
            }, {
                where: {
                    id : id
                }
            })
        } else {
            return res.status(200).json("No tiene permisos para cambiar los roles")
        }
    }

   
    res.status(200).json("Cambios cargados exitosamente!")
  } catch (error) {
    res.status(500).send("Hubo un error en el servidor");
  }
});

module.exports = router;
