const { Router } = require("express");
const SupplierController = require("../controllers/SupplierController");

const router = Router();

// router.use(require("../middlewares/SupplierReviewOrderByRating"));
// router.use(require("../middlewares/suppliersSearcher"))

router.get("/:id?", async (req, res, next) => {
  const { name, sort_by } = req.query;
  const { id } = req.params;

  try {
    const dbSuppliers = id
      ? await SupplierController.findById(id)
      : await SupplierController.findByName(name, sort_by);

    if (!dbSuppliers)
      return res.status(404).json({ error: "No hubo resultados" });

    return res.status(200).json(dbSuppliers);
  } catch (error) {
    next(error);
  }
});

/***/
let multer = require("multer");

const fs = require("fs-extra");
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

// Log the configuration
console.log(cloudinary.config());

const VALID_FILE_TYPE = ["image/jpg", "image/png", "image/jpeg"];

const fileFilter = (req, file, cb) => {
  console.log(file);
  if (!VALID_FILE_TYPE.includes(file.mimetype)) {
    cb(new Error("invalid type of file"));
  } else {
    cb(null, true);
  }
};

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/Images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

let upload = multer({ storage: storage, fileFilter: fileFilter });
/***/
router.post("/", upload.single("image"), async (req, res, next) => {
  const { name, cuit, description, location, address, phone, email } = req.body;

  let dbSupplier;

  if (
    !name ||
    !cuit ||
    !description ||
    !location ||
    !address ||
    !phone ||
    !email
  )
    return res
      .status(404)
      .json({ error: "Faltan datos obligatorios por cargar" });

  try {
    if (req.file) {
      //console.log('formData',formData)*/

      var imageLoaded = await cloudinary.uploader.upload(
        req.file.path,
        {
          transformation: [
            { width: 100, height: 100, crop: "fill", gravity: "auto" },
            { fetch_format: "auto", quality: "auto" },
          ],
        },
        (error, result) => {
          console.log(result);
          if (error) return new Error(error);
          else return result.secure_url;
        },
        (options = {
          use_filename: true,
          unique_filename: false,
          overwrite: true,
          folder: "/Logos Suppliers",
        })
      );

      fs.unlink(req.file.path);

      dbSupplier = await SupplierController.add({
        name: name,
        cuit: cuit,
        description: description,
        location: location,
        adress: address,
        phoneNumber: phone,
        eMail: email,
        logo: imageLoaded.secure_url,
      });
    } else {
      dbSupplier = await SupplierController.add({
        name: name,
        cuit: cuit,
        description: description,
        location: location,
        adress: address,
        phoneNumber: phone,
        eMail: email,
      });
    }

    return res.status(201).json(dbSupplier);
  } catch (error) {
    if (
      [
        "DuplicatedNameOrSlugInApiError",
        "ReleasedInvalidDateError",
        "PlatformsEmptyError",
      ].includes(error.name)
    )
      return res.status(400).json({ error: error.message });

    next(error);
  }
});

router.use(require("../middlewares/suppliersSearcher.js")); //ruta get para todos los suppliers disponibles en la db
module.exports = router;
