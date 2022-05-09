const express = require("express");
const app = express();

app.use(express.text());
app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is runing on PORT ${PORT}...`));
