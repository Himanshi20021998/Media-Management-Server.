const File=require("../models/File");
const cloudinary=require("cloudinary").v2;

// LocalFileUpload -> handler function
exports.localFileUpload=async (req, res)=>{
    try{
        // Fetch file from request
        const file=req.files.file;
        console.log("File is there: ", file);

        // create path where file need to be stored on server
        let path=__dirname+"/files/"+Date.now()+`.${file.name.split('.')[1]}`;
        console.log("Path: ", path);

        // add path to the move function
        file.mv(path, (err)=>{
            console.log(err);
        });

        // create successful response
        res.json({
            success:true,
            message:'Local file uploaded successfully',
        });
    } 
    catch(error){
        console.log("Not able to upload the file on server");
        console.log(error);
    }
}

function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality){
    const options={folder};

    if(quality){
        options.quality=quality;
    }

    options.resource_type="auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// image upload handler
exports.imageUpload=async (req, res)=>{
    try{
        // Data fetch
        const {name, tags, email}=req.body;
        console.log(name, tags, email);

        const file=req.files.imageFile;
        console.log(file);

        // Validation
        const supportedTypes=["jpg", "jpeg", "png"];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log("File type: ", fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }

        // File format is supported
        console.log("Uploading to MediaManagementServer");
        const response=await uploadFileToCloudinary(file, "MediaManagementServer");
        console.log("Cloudinary response: ", response);

        // save entry to db
        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Image successfully uploaded',
        })

    } catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
}

// video upload handler
exports.videoUpload=async (req, res)=>{
    try{
        // data fetch
        const {name, tags, email}=req.body;
        console.log(name, tags, email);

        const file=req.files.videoFile;

        // Validation
        const supportedTypes=["mp4", "mov"];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log("File type: ", fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }

        // File format is supported
        console.log("Uploading to MediaManagementServer");
        const response=await uploadFileToCloudinary(file, "MediaManagementServer");
        console.log("Cloudinary response: ", response);

        // save entry to db
        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Video successfully uploaded',
        })

    } catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
}

// imageSizeReducer handler
exports.imageSizeReducer=async (req, res)=>{
    try{
        // Data fetch
        const {name, tags, email}=req.body;
        console.log(name, tags, email);

        const file=req.files.imageFile;
        console.log(file);

        // Validation
        const supportedTypes=["jpg", "jpeg", "png"];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log("File type: ", fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }

        // File format is supported
        console.log("Uploading to MediaManagementServer");
        
        const response=await uploadFileToCloudinary(file, "MediaManagementServer", 20);

        console.log("Cloudinary response: ", response);

        // save entry to db
        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Image successfully uploaded',
        })

    } catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
}