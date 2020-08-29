const express = require('express');
const app = express();

const PORT  = process.env.PORT || 3000;

app.use(express.static("public"));

const route = app.listen(PORT, () => {
	console.log("server is up and running");
});

