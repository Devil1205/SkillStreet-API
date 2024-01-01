const basicAuth = require('basic-auth');

//basic authentication middleware
const userAuth = (req,res,next)=>{
    const user = basicAuth(req);
    if(!user || user.name!=='admin' || user.pass!=='admin@123')
    {
        return res.status(401).json({success: false, message: "Unauthorized Access, kindly enter correct basic auth credentials to test API endpoints"})
    }
    next();
}

module.exports = userAuth;