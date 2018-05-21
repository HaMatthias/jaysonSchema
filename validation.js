var ajv = new (require("ajv"));

const schema = require("./schema.json");
const schema_formats = require("./schema_formats.json");

const valid = require("./valid.json");
const invalid = require("./invalid.json");

const formats = require("./formats.json");


var result = ajv.validate(schema, valid);

console.log("Valid order example: " + result);

result = ajv.validate(schema, invalid);

console.log("Invalid order example: " + result);

result = ajv.validate(schema_formats, formats);

console.log("Formats example: " + result);


