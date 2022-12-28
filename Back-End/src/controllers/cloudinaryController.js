const cloudinary = require("cloudinary").v2;
const multer = require("multer");

// Return "https" URLs by setting secure: true
// TODO: PROPONGO CAMBIAR LAS VARIABLES DE ENTORNO
// TODO: POR ALGO RELACIONADO A CLOUDINARY
// TODO: EJEMPLO CLOUDINARY_API_KEY
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Log the configuration
// console.log(cloudinary.config());

const VALID_FILE_TYPE = ["image/jpg", "image/png", "image/jpeg"];

const fileFilter = (req, file, cb) => {
  console.log(file);
  if (!VALID_FILE_TYPE.includes(file.mimetype)) {
    cb(new Error("invalid type of file"));
  } else {
    cb(null, true);
  }
};

const setStorage = (destination) =>
  multer.diskStorage({
    destination: (req, file, cb) => cb(null, destination),
    filename: (req, file, cb) => cb(null, file.originalname),
  });

const uploadMulter = (destination) =>
  multer({ storage: setStorage(destination), fileFilter });

// Uploads an image file
const uploadImage = async (imagePath) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log("result", result);
    return result;
  } catch (error) {
    console.error(error);
  }
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
};

module.exports = {
  uploadImage,
  uploadMulter,
};
