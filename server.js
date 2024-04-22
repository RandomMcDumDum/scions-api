const express = require("express");
const app = express();
const PORT = 8000;

const scions = {
  alisaie: {
    Name: "Alisaie Leveilleur",
    Location: "Sharlayan",
    "Eye color": "Blue",
    "Hair color": "White",
    Organizations: "Scions of the Seventh Dawn",
  },
  alphinaud: {
    Name: "Alphinaud Leveilleur",
    Location: "Sharlayan",
    "Eye color": "Blue",
    "Hair color": "White",
    Organizations: "Scions of the Seventh Dawn",
  },
  adventurer: {
    Name: "adventurer",
    Location: "Eorzea",
    "Eye color": "adventurer",
    "Hair color": "adventurer",
    Organizations: "adventurer",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/js/main.js", (request, response) => {
  response.sendFile(__dirname + "/js/main.js");
});

app.get("/api", (request, response) => {
  response.json(scions);
});

app.get("/api/:scionName", (request, response) => {
  const scionName = request.params.scionName.toLowerCase();

  if (scions[scionName]) {
    response.json(scions[scionName]);
  } else {
    response.json(scions["adventurer"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}. You better go catch it!`);
});
