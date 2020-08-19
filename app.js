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
      title: "Customer API",
      description: "Customer API Information",
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
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/customers", async function(req, res) {

 res.status(200).send("Test");

 mycar = new Document("Ford");
 
 Document.save(mycar);

 console.log(mycar);
      
});

/**
 * @swagger
 * /neuesAuto:
 *  post:
 *    description: Add a Document
 *    produces:
 *       - application/json
 *    parameters:
 *      - name: name
 *        in: body
 *        description: Name of our customer
 *        required: true
 *        type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.post('/neuesAuto',(req, res) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  mycar = new Document(req.body);
  Document.save(mycar);
  res.status(200).send("Test");
});

/**
 * @swagger
 *
 * /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
app.post('/login', (req, res) => {
  console.log(req.body);
  res.status(200).send("Test");
});
/* EXAMPLE OF ASYNC FUNCTION

app.get("/getdata", async function(req, res){  
   var data = await pullData();
   var filteredData = await filterByYear(data);
   res.json(filteredData);
})
*/

/**
 * @swagger
 * /customer:
 *    post:
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: body
 *        description: Name of our customer
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
app.post("/customer", (req, res) => {
  
  console.log("Customer adede");
  alleKey = collection.all().then(
    cursor => cursor.map(doc => doc._key)
  ).then(
    keys => console.log('All keys:', keys.join(', ')),
    err => console.error('Failed to fetch all documents:', err)
  );
  res.status(200).send(alleKey);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});