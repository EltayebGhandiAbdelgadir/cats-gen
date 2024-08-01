import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_cat = "https://api.thecatapi.com/v1/images/search";

// Connecting the public file
app.use(express.static("public"));


// Connecting the API 
app.get("/",async(req,res)=>{
    try{
        const result = await axios.get(API_cat);
        console.log(result.data[0].url);
        res.render("index.ejs",{img: result.data[0].url});
    }
    catch(error){
        console.log(error.message)
    }

});

app.listen(port,(req,res)=>{
    console.log(`Page is open on port ${port}`);
});
