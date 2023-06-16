//Installation for FS module. Run this in the terminal.
npm install file-system --save

//Requirement line of code for FS
const fs = require('fs');

//Class Constructor for JSON formatting (This example is from a record management system I built, change as necersarry) This will be included in the user input logic to map inputs to specific fields.
class PatientRecord {
    constructor(id, name, gender, email, dob, phone, job) {
      this.id = id;
      this.name = name;
      this.gender = gender;
      this.email = email;
      this.dob = dob;
      this.phone = phone;
      this.job = job;
    }
  }

  // Functions for saving and loading data to/from JSON file. File directory must be the location of your JSON file, the current one is just an example.
  function loadRecords() {
    try {
        const data = fs.readFileSync('src/records.json'); //File directory must be the location of your JSON file, the current one is just an example.
        records = JSON.parse(data); //This declares the variable that will contain what ever loaded you loaded from the JSON file. This example was populating a global variable in the main block of code.
    } catch (error) {
        //Handles file read errors or empty file
        console.error('Error loading records:', error.message);
    }
  }

  function saveRecords() {
    try {
        fs.writeFileSync('src/records.json' , JSON.stringify(records)); //File directory must be the location of your JSON file, the current one is just an example.
    } catch (error) {
        console.error('Error saving records:', error.message);
    }
  }