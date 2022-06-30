const express = require("express");
const routes = require("./controllers");
// handlebars if decide to use them
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
});