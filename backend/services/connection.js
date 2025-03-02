var mongoose = require("mongoose");                 //import the mongoose module
var config = require('config');
const adminService = require("../services/admin");


//database connection
mongoose.Promise = global.Promise;
let options = {
  autoIndex: false, 
  reconnectTries: 100,
  reconnectInterval: 500, 
  poolSize: 10, 
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useFindAndModify :  false
};

if(process.env.NODE_ENV==="docker") {                      // NODE_ENV environment variable is set to docker
  options.authSource = config.get('mongodb.authDB')            
}

mongoose.connect(config.get('mongodb.connectionString'),options).then(()=>{     // promiss
    console.log("connected to mongoDB");
    adminService.addAdminIfNotFound();
    
}).catch((err)=>{
    console.log("Error connecting to database",err);
})


module.exports=mongoose;