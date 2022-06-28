var express = require('express');
var app = express();
const helmet  = require('helmet');

app.set('port',process.env.PORT || 3001);
app.use(
  helmet.referrerPolicy({
    policy: "no-referrer"
  })
, helmet.noSniff()
, helmet.frameguard({
    action: "deny"
  })
, helmet.contentSecurityPolicy({
    useDefaults: true
  , directives: {
      "default-src": "'self'"
    }
  })
 );
 app.use((req, res, next) => {
  res.setHeader(
    "Permissions-Policy",
    "oversized-images=('self')"
  );
  next();
});
app.use(express.static("."));

app.get('/',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.redirect(path.join(__dirname, '/index.html'));
  res.status(200).send(__dirname+"./");
});

app.listen (app.get( 'port' ), function (){
  console.log ('Express started on http://localhost:' +
  app.get ('port') + '; press Ctrl-C to terminate.' );
});
