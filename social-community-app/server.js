require("dotenv").config();
const express = require("express");
const cors = require("cors");


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

async function main(){
    try {
        const db = require("./app/models");      
        const PORT = process.env.NODE_DOCKER_PORT || 8080;
        await db.sequelize.sync();
        
        app.listen(PORT, () => {
            console.log('==== Connection has been established successfully.====');
            console.log(`Server is running on port ${PORT}.`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
};

app.use(cors(corsOptions));

// Parse request of 
// content type application/json
app.use(express.json());

// Parse request of
// content type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to social community application."
    })
});

require("./app/routes/publication.routes.js")(app);

main();



