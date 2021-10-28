var express = require('express');
var app = express();
app.use(express.static("."));
app.set('port',process.env.PORT || 3001);

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/',function(req,res){
    res.redirect(path.join(__dirname, '/index.html'));
    res.status(200).send(__dirname+"./");
});

app.listen (app.get( 'port' ), function (){
  console.log ('Express started on http://localhost:' +
  app.get ('port') + '; press Ctrl-C to terminate.' );
});
