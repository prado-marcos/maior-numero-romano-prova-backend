const largestRomanNumInStr = require("./src/largest-roman-num-in-str");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.post("/search", (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }
    res.send(largestRomanNumInStr(req.body.text));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is runing on PORT ${PORT}...`));
