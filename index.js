var express = require("express");
const app = express();
app.get("/",(req,res)=>{

    res.json({
"success":"this is homepagge"
    });
});
app.listen(5000);