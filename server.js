// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/getRoutes")(app);

// The local host to start server
app.listen(PORT, () => console.log(`listen on PORT: http://localhost:${PORT}`));

