const express = require('express');
const router  = express.Router();


router.get('/',(req,res)=>{

    //res.sendFile(path.join(__dirname + '/views/index.ejs'));                  //path.join une la direccion actual con la direccion del htym
    res.render('index.html', { title: 'Home'});                  //aca le mando un objeto a la vista para renderizar                                                         // para .html usar res.sendFile(path.join(__dirname + '/views/index.ejs'));  
   });

router.get('/contact',(req,res)=>{

            
    res.render('contact.html', { title: 'Contacts'});               
   });

router.get('/about',(req,res)=>{

            
    res.render('about.html', { title: 'About'});               
   });

   
module.exports = router;