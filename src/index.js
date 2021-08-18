const express = require('express');



const app = express();


//IMP ROUTES
const dataToMap = require('./routes/dataToMap')

//SETTINGS
app.set('port', process.env.PORT || 3000);


//MIDDLEWARES

app.use(express.json());;

//ROUTES
app.use('/api/dataToMap', dataToMap)



//STARTING SERVER
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

module.exports = app