var express = require("express");
const app = express();
app.get("/",(req,res)=>{

    res.json({
"success":"this is homepagge"
    });
});
app.listen(process.env.port||5000);