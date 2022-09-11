module.exports = (sequelize, Sequelize) => {
    const Publication = sequelize.define("publication",{
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    }); 

    return Publication;
}