var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:'article-one',
    heading:'My article-one',
    date:'sep 22,2016',
    pagecontent:`
    <p>
                this is my first article.this is my first article.this is my first article.
                this is my first article.this is my first article.this is my first article.this is my first article.
                this is my first article.this is my first article.this is my first article.this is my first article.
                
            </p>
            
             <p>
                this is my first article.this is my first article.this is my first article.
                this is my first article.this is my first article.this is my first article.this is my first article.
                this is my first article.this is my first article.this is my first article.this is my first article.
                
            </p>
            
             <p>
                this is my first article.this is my first article.this is my first article.
                this is my first article.this is my first article.this is my first article.this is my first article.
                this is my first article.this is my first article.this is my first article.this is my first article.
                
            </p>
    `
};

function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var pagecontent=data.pagecontent;
var htmltemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="device-width-device, initial-scale-1" /> 
        
          <link href="/ui/style.css" rel="stylesheet" />  
        
    </head>
    <body>
        <div class="container">
        
        <div>
            <a href="/">Home</a>
        </div>
        <br/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${pagecontent}
        </div>
        </div>
    </body>
</html>

`;
  return htmltemplate;  
} 


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res) {
     res.send(createtemplate(articleone));
});

app.get('/article-two',function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});


app.get('/article-three',function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
