const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");


cloudinary.config({
    cloud_name: "dizyh2snv",
    api_key: "467489144919118",
    api_secret: "GA6Oryp2Jhte1aeImXiLGv0wzUc",
});
const uploadOnCloudinary = async (localFilePath) => {
    try {
        const formattedPath = path.resolve(localFilePath).replace(/\\/g, "/");

        const result = await cloudinary.uploader.upload(formattedPath, {
            resource_type: "image",
        });

        fs.unlinkSync(formattedPath);  // Cleanup even on failure

        return result;
    }   catch (error) {
        console.error("Cloudniary Upload Error:", error);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath); // Cleanup even on failure
        }
        return null;
    }
};
module.exports = uploadOnCloudinary;