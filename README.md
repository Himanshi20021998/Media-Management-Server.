MEDIA MANAGEMENT SERVER

A Node.js server application that allows users to upload images and videos to the server. It uses Express and the Express File Uploader middleware to handle file uploads. The uploaded files are then stored on Cloudinary, a cloud based image and video management service. The application also sends an email to the user who uploaded the file by using nodemailer, containing a link to the uploaded file.

The application should consists of four files:

1. index.js: This file sets up the Express app, connects to the database and Cloudinary, and defines the endpoints for file upload.
2. /routes/FileUpload.js: This file defines the routes for file upload, which include imageUpload videoUpload, and imageSizeReducer.
3. /models/File.js: This file defines the schema for the uploaded files and defines a post-save hook that sends an email to the user who uploaded the file
4. /controllers/fileUpload.js. This file contains the logic for handling file uploads, including checking file types. uploading to Cloudinary, and saving the file to the database.




ABOUT CLOUDINARY

Cloudinary is a cloud-based media management platform that provides a wide range of services related to media, such as image and video upload, storage manipulation, optimization, and delivery. It allows developers to easily manage media content on their websites or applications, without worrying about server side infrastructure.

To add Cloudinary to an Express.js application, you can follow these steps:

1. Create a Cloudinary account: If you don't have a Cloudinary account yet, you can sign up for a free account at https://cloudinary.com/users/register/free
2. Install the Cloudinary SDK: You can install the Cloudinary SDK for Node.js using npm, the Node.js package manager. Run the following command in your terminalk
3. npm install cloudinary
4. Configure Cloudinary: In your Express.js application, you need to configure Cloudinary with your account credentials. You can do this by creating a Cloudinary instance with your account name. API key, and API secret.
5. Upload media to Cloudinary: Once you have configured Cloudinary, you can upload media to it using the cloudiary uploader aplies method.
6. Use Cloudinary URLs: After you have uploaded media to Cloudinary, you can use its URLs in your application to display or manipulate the media.




NODEMAILER INTEGRATION

Nodemailer is a module for Node.js applications that allows them to send emails. It is a powerful and flexible library that supports both traditional and modern email protocols such as SMTP, IMAP, POP3, and OAuth2. In this article, we will explore the features of Nodemailer and how to use it in an application

Installation Before we can start using Nodemailer, we need to install it using npm.
npm install nodemailer

Usage After installing the nodemailer module, we can include it in our application using the require() method.
const nodemailer = require('nodemailer');




![Screenshot (1)](https://github.com/Himanshi20021998/Media-Management-Server./assets/135860725/58e573b9-1ab6-4d60-bb8f-4016b9351904)

![Screenshot (2)](https://github.com/Himanshi20021998/Media-Management-Server./assets/135860725/c4ce9048-fff1-4a25-8b57-861d8fb3ee51)

![Screenshot (3)](https://github.com/Himanshi20021998/Media-Management-Server./assets/135860725/bd272fe7-3435-41be-a424-778bbe82a310)


