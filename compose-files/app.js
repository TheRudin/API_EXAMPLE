const express       = require("express");
const bodyParser    = require('body-parser');
const app           = express();
const swaggerJsDoc  = require("swagger-jsdoc");
const swaggerUi     = require("swagger-ui-express");
const Document      = require ('./model/model.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

//Listening Port der Applikation definieren
const port          = process.env.PORT || 5000;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "IBZ Test API",
      description: "IBZ API Information",
      contact: {
        name: "Timo Rudin"
      },
      servers: ["http://localhost:5000"]
    }
  },
  // ['.routes/*.js']
  apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /testData:
 *  get:
 *    description: Use to request all test Data
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/testData", async function(req, res) {
  const allKeys = Document.get();
  res.status(200).send(allKeys);

 //mycar = new Document("Ford");
 
 //Document.save(mycar);

 //console.log(mycar);
      
});

/**
 * @swagger
 * /testData:
 *  post:
 *    description: Add a Document
 *    produces:
 *       - application/json
 *    parameters: 
 *       - in: body
 *         name: user
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.post('/testData',(req, res) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  mycar = new Document(req.body);
  Document.save(mycar);
  res.status(200).send("Test");
});

/* EXAMPLE OF ASYNC FUNCTION

app.get("/getdata", async function(req, res){  
   var data = await pullData();
   var filteredData = await filterByYear(data);
   res.json(filteredData);
})
*/

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});