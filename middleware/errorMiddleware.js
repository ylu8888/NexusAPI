//error middleware to detect errors so errors in every file aren't displayed to user 
const errorMiddleware = (err, req, res, next) => {
    console.log('here is an error middleware!')
    //if the app is still in development, show any stack message, but if its in live production, show null
    //not secure for application to show every error & files
    
    const statusCode = res.statusCode ? res.statusCode : 500; // if user gets statusCode show it, otherwise show 500
    res.status(statusCode); 
    res.json({message: err.message, stack: process.env.NODE_ENV === "development" ? err.stack: null});
}

module.exports = errorMiddleware