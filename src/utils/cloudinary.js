import { v2 as cloudinary } from "cloudinary";
import fs from "fs";



  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });



    const uploadOnCloudinary = async (localFilePath) => {
      try {
        if (!localFilePath) return null;
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
          resource_type: "auto",
        });
        // file has been uploaded successfully
        // console.log("File is uploaded on cloudinary : ", response);
        fs.unlinkSync(localFilePath); // remove the locally saved temporary file
        return response;
      } catch (error) {
        fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
        return null;
      }
    };

    const getPublicId = (url) => {
      const urlParts = url.split('/');
      const fileName = urlParts[urlParts.length - 1];
      const publicId = fileName.split('.')[0];
      return publicId;
    }

    const deleteOnCloudinary = async (oldURL) => {
        const publicId = getPublicId(oldImageUrl);

      try{
        const result = cloudinary.uploader.destroy(publicId);
        console.log("Image deleted successfully : " , result);
      }
      catch(error){
        console.error("Error deleting image : ", error.message);
      }
    }


export {
  uploadOnCloudinary,
  deleteOnCloudinary
}
  