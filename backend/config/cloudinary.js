import {v2 as Cloudinary} from "cloudinary"

const connectCloudinary = async () =>{

    Cloudinary.config({
        cloud_name:process.env.CLODINARY_NAME,
        api_key:process.env.CLODINARY_API_KEY,
        api_secret:process.env.CLODINARY_SECRET_KEY
    })
}

export default connectCloudinary;