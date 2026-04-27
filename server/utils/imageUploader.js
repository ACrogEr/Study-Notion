<<<<<<< HEAD
const cloudinary = require("cloudinary").v2

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  const options = { folder }
  if (height) {
    options.height = height
  }
  if (quality) {
    options.quality = quality
  }
  options.resource_type = "auto"
  console.log("OPTIONS", options)
  return await cloudinary.uploader.upload(file.tempFilePath, options)
}
=======
const cloudinary = require('cloudinary').v2;

exports.uploadImageToCloudinary =  async (file,folder,height,quality) =>{
    const options = {folder};
    if(height) options.height = height;
    if (quality) {
        options.quality=quality;
    }

    options.resource_type ="auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options)
}
>>>>>>> 84922abad51817d298c2cea54e64440f94b659a0
