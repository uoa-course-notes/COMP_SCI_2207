var express = require('express');
var router = express.Router();


var counter = 0;
router.get('/count', function(req, res, next){
  counter++;
  console.log(counter.toString());
  /*Sends the response back to the browser which will be rendered on the page.
  */
  // res.send(String(counter));
  // res.send(`Counter is now ${counter}`);
  // res.sendStatus(204);
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Document</title>
</head>
<body>
    <h1>Dynamic content! ---> ${counter}</h1>
</body>
</html>`);
});



router.get('/test', function(req, res){
  res.send("Testing memes!");
});


var memefiles = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
];

/*GET home page */
router.get('/', function(req, res, next){
  var memefile = memefiles[Math.floor(Math.random() * 7)];
  res.send(`
   <html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond%7CLobster">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generic WDC Website</title>
    <link rel="stylesheet" type="text/css" href="./stylesheets/style-ajax.css">
</head>
<body>
    <div id="container">
        <header><h1>Generic WDC Website</h1></header>
        <hr>
        <main>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui at inventore error, doloremque architecto possimus tempore culpa in perspiciatis ducimus explicabo, ipsa reiciendis porro voluptate optio expedita suscipit nulla?</p>
            <p>Lorem ipsum dolor sit amet.</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam dolorem vitae quasi maiores, omnis, sit molestias, numquam nisi vero reiciendis? Ad impedit veniam qui adipisci, omnis obcaecati enim quidem.
            Similique consequuntur aliquid earum velit quos, expedita nemo assumenda labore ipsa eum? Atque hic amet accusantium, minus eaque unde modi laudantium earum, voluptates animi praesentium molestiae, tempora cupiditate magnam voluptatem.
            Laudantium totam odit debitis libero qui porro sit earum, sequi deleniti veritatis reprehenderit magnam delectus illum officiis ullam sunt incidunt repellendus, velit quos! Excepturi ea voluptatem, obcaecati ex tempora at!
            Ipsa beatae necessitatibus maiores voluptate porro facilis! Ab molestiae iure laborum dolorem totam numquam aut, debitis dignissimos illum eum deleniti cum quas blanditiis cumque corporis atque explicabo eos delectus dolor!
            Sit provident, fuga laboriosam accusamus ducimus autem sapiente molestias, voluptates eius at vitae voluptate, ad fugiat alias. Porro distinctio facere dolore corrupti pariatur doloremque repellendus et aliquam nobis. Repellendus, totam.
            Obcaecati hic cum reiciendis consectetur officia, voluptas cumque. Nam cupiditate totam nobis fugit nulla ex repellat necessitatibus doloremque sit, quaerat ut provident odio itaque. Modi tempore veritatis quas a expedita.
            Quaerat officia totam, itaque aspernatur asperiores fugiat optio! Optio, ullam sit. Recusandae, accusantium illo odit dignissimos non, libero repellat doloribus hic voluptatum alias architecto delectus tempora officia aliquid consequatur minima?
            Culpa ducimus, beatae eius, molestias vero cumque impedit sunt optio aliquid numquam quis? Laudantium nemo, unde magni, atque laborum aliquam ad culpa maiores doloremque, voluptas praesentium porro et fugit modi.
            Est delectus ipsum voluptatem beatae aliquam repellendus alias mollitia labore atque suscipit ipsam fugit dignissimos eius tenetur eveniet iste sequi, voluptas hic debitis sit quisquam consequuntur laborum quis. Dolores, enim.
            Accusantium, ullam deleniti est asperiores dolorum cumque. Eum voluptate necessitatibus modi molestiae atque laborum, fugit laudantium ab, incidunt ex ipsam consequatur rem enim, dignissimos consequuntur vel iste ipsum ea esse?
            <h2>The meme of the day is:</h2>=
            <img id="meme" width="400" src="/images/${memefile}" alt="Meme of the day"><br>
            <button onclick="window.location.assign(\'/\')" type="button">Get a new meme</button>
        </main>
    </div>
    <script src="./javascripts/meme.js"></script>
</body>
</html> 
    `);
});


// There has to be a better way
router.get('ajax/memeday', function(req, res, next){
  res.send(String(Math.floor(Math.random() * 7) + 1));
});


module.exports = router;
