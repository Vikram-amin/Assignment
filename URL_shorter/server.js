const express = require("express");
const app = express();
const mongoose = require('mongoose')
const shortURL = require('./model/url')

mongoose.connect(`mongodb://localhost:27017/masai`);

const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("connercted to database"))

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended : false}))

app.get("/", async (req,res) => {
    const shortUrls = await shortURL.find()
    res.render("index", { shortUrls : shortUrls });
})


app.post("/shortURLs", async (req,res) => {
    await shortURL.create({
      full: req.body.fullURL, // fullURL is name in input
    });

    res.redirect('/')
});


app.get("/:url", async (req, res) => {
  try {
    const shortUrlss = await shortURL.findOne({ short: req.params.url});
    shortUrlss.clicks++;
    shortUrlss.save();
    res.redirect(shortUrlss.full);
  } catch (err) {
    console.log(err);
  }
});

app.listen(8000, () => {
  console.log("port is running at port 8000");
});
