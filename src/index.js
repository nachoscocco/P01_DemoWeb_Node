const express =require('express');
const path    =require('path');            //se necesita para concatenar paths de windows linux etc
const indexRoutes = require('./routes/index'); 



//config 
const app = express();
app.set('port',4200);
app.set('views',path.join(__dirname + '/views'));

app.engine('html',require('ejs').renderFile)        //permite usar ejs en archivos html
app.set('view engine','ejs');                       //aca seteo el motor de vista como ejs

//routes
app.use(indexRoutes);


//middleware

//satick files

app.use(express.static(path.join(__dirname + '/public')));


//listening
app.listen(app.get('port'), () => 
        {console.log('Server on port',app.get('port'))
    
    });