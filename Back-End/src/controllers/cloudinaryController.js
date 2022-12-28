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

// Uploads an image file
/////////////////////////
const uploadImage = async (imagePath) => {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
      };
  
      try {
        // Upload the image
        const result = await cloudinary.uploader.upload(imagePath, options);
        console.log('result',result);
        return result;
      } catch (error) {
        console.error(error);
      }
    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions

};

module.exports = {
    uploadImage
};