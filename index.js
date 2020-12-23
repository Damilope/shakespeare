const express = require("express");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("build"));

const kStatusBadRequest = 400;
const kStatusBadRequestMsg = "missing search query in URL params";
const kContentType = "application/json";

app.get("/search", function (req, res) {
    const query = req.query["q"];

    if (!query || query.length === 0) {
        res.status(kStatusBadRequest).send(kStatusBadRequestMsg);
        return;
    }

    const matches = handleSearch(query);
    res.type(kContentType).json(matches);
});

initAndListen();

const works = {
    raw: "",
    lowercased: "",
};

function loadWorks() {
    const data = fs.readFileSync("./completeworks.txt", { encoding: "utf-8" });
    works.raw = data;
    works.lowercased = data.toLowerCase();
}

function initAndListen() {
    loadWorks();

    app.listen(port, () => {
        loadWorks();
        console.log(`Listening on port ${port}...`);
    });
}

function handleSearch(text) {
    const matches = [];
    const kLeftPad = 250;
    const kRightPad = 250;

    let matchIndex = 0;
    text = text.toLowerCase();

    while (true) {
        matchIndex = works.lowercased.indexOf(text, matchIndex);

        if (matchIndex === -1) {
            break;
        } else {
            matches.push(
                works.raw.substring(
                    matchIndex - kLeftPad,
                    matchIndex + kRightPad
                )
            );
        }
    }

    return matches;
}
