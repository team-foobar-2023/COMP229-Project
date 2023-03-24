let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
//create a reference to the db Schema which is the model
let Contact = require("../models/contacts");

//we want to display the contactList
module.exports.displayDashboard = (req, res, next) => {
  Contact.find()
    .sort({ lastName: "asc" })
    .exec((err, contactList) => {
      if (err) {
        return console.error(err);
      } else {
        res.render("dashboard", {
          title: "Dashboard",
          contactList: contactList,
          displayName: req.user ? req.user.displayName : "",
        });
      }
    });
};
module.exports.displayAddIncidentRecord = (req, res, next) => {
  res.render("incidentRecord/add", {
    title: "Add Incident Record",
    displayName: req.user ? req.user.displayName : "",
  });
};
