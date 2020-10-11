const express = require("express");
const app = express();
const cors = require("cors");
const port = 3002;
const stratford = require("./data/Stratford.json");
const heathrow = require("./data/Heathrow.json");
//const harrow = require("./data/Harrow.json");

app.use(express.json());
app.use(cors());

app.get("/:city/:category", (request, response) => {
  const city = request.params.city;
  const category = request.params.category;
  const allGuidesInCity = require(`./data/${capitalize(city)}.json`);

  const searchedGuide = allGuidesInCity[category];
  response.json(searchedGuide);
});

function capitalize(str) {
  return str && str[0].toUpperCase() + str.slice(1);
}

app.listen(port, () => console.log(`Server is listennig on port ${port}!`));
