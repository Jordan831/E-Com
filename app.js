var express = require("express");
const app = express();
app.get("/",(req,res)=>{

    res.json({
"success":"this is homepagge"
    });
});

app.get("/status",(req,res)=>{

    res.json({
"success":"this is status page"
    });
});
app.listen(5000);