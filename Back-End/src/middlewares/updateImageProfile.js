// const { Router } = require("express");
// const router = Router();
// const { User } = require("../db.js");
// const cloudinaryController = require("../controllers/cloudinaryController");

// let multer = require('multer');

// const fs = require('fs-extra')

// const VALID_FILE_TYPE = ['image/jpg','image/png','image/jpeg'];

// const fileFilter = (req, file, cb) => {
//     console.log(file)
//     if(!VALID_FILE_TYPE.includes(file.mimetype)){
//         cb(new Error ('invalid type of file'))
//     } else {
//         cb(null, true)
//     }
// };

// let storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, './public/Images')
//     },
//     filename: function(req, file, cb){
//         cb(null, file.originalname)
//     }
// });

// let upload = multer({ storage: storage, fileFilter: fileFilter });

// router.post("/updateImage/:id", upload.single('image'), async (req, res, next) => {
//     const { id } = req.params;
//     console.log(id)
//    try{
//     const result = await cloudinaryController.uploadImage(req.file.path)
//     fs.unlink(req.file.path);

//     await User.update({
//         picture: result.secure_url
//     }, {
//         where: {
//             id: id
//         }
//     });

//     const userUpdated = await User.findByPk(id);

//     res.status(201).send(userUpdated);
    
//    } catch(e){
//     console.log(e)
//     next(e)
//    }
// });

// router.get('/:id', async (req,res,next) => {
//     const {id} = req.params;

//     try{
//         const result = await User.findByPk(id);

//         res.status(200).send(result);
//     } catch(e) {
//         next(e);
//     }
// });
// module.exports = router;