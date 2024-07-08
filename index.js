// app create
const express=require("express");
const app=express();

// PORT find
require("dotenv").config();
const PORT=process.env.PORT || 3000;

// add middleware
app.use(express.json());
const fileupload=require("express-fileupload");
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/',
}));

// connect with db
const db=require("./comfig/database");
db.connect();

// connect with cloud
const cloudinary=require("./comfig/cloudinary");
cloudinary.cloudinaryConnect();

// mount api route
const Upload=require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

// activate server
app.listen(PORT, ()=>{
    console.log(`App is running at ${PORT}`);
})