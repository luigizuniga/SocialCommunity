module.exports = app => {
    const publications = require("../controllers/publication.controller.js")
    
    var router = require("express").Router();

    // Create a new Publication
    router.post("/" , publications.create);

    // Retrieve all Publication
    router.get("/", publications.findAll);

    // Retrieve all Published Publication
    router.get("/published", publications.findAllPublished);

    // Retrieve a single Publication with ID
    router.get("/:id", publications.findOne);

    // Update a Publication with ID
    router.put("/:id", publications.update);

    // Delete a Publication with ID
    router.delete("/:id", publications.delete);

    // Delete All Publications
    router.delete("/", publications.deleteAll);

    app.use("/api/publications", router);
};