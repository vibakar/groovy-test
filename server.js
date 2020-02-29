const fs = require('fs');
const generateReport = require('./reports/generateReport');

console.log("This file is executing");

let data = fs.readFileSync('./data.json', 'utf-8');

generateReport(data);