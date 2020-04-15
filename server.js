// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var reservetable = [
  {
    routename: "table1",
    partyName: "Jengo",
    partyNum: 2,
    occupied: false
  },
  {
    routeName: "table2",
    partyName: "Ben",
    partyNum: 6,
    occupied: false
  },
  {
    routename: "table3",
    partyName: "Vader",
    partyNum: 5,
    occupied: false
  },
  {
    routename: "table4",
    partyName: "Ewok",
    partyNum: 6,
    occupied: false
  },
  {
    routename: "table5",
    partyName: "Maul",
    partyNum: 1,
    occupied: false
  },
  {
    routename: "table6",
    partyName: "Revan",
    partyNum: 3,
    occupied: false
  },
  {
    routeName: "table7",
    partyName: "Ben",
    partyNum: 6,
    occupied: false
  },
  {
    routename: "table8",
    partyName: "Vader",
    partyNum: 5,
    occupied: false
  },
  {
    routename: "table9",
    partyName: "Ewok",
    partyNum: 6,
    occupied: false
  },
  {
    routename: "table10",
    partyName: "Maul",
    partyNum: 1,
    occupied: false
  }
];
  // Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
  
  // Displays all tables
  app.get("/api/reservetable", function(req, res) {
    return res.json(reservetable);
  });

  // Displays a single character, or returns false
    app.get("/api/reservetable/:table", function(req, res) {
    var chosen = req.params.table;
  
    console.log(chosen);
  
    for (var i = 0; i < reservetable.length; i++) {
      if (chosen === reservetable[i].routeName) {
        return res.json(reservetable[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New reservation - takes in JSON input
    app.post("/api/reservetable", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newtable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newtable.routeName = newtable.partyName.replace(/\s+/g, "").toLowerCase();
  
    console.log(newtable);
  
    characters.push(newtable);
  
    res.json(newtable);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
//add later:
//party size must be between 2-6
//partysize 1 = alert("go to the bar");
//less than one is invalid
//more than 6 alert("party too big")
//make finite number of tables, tell if full