//##########################################
//##########################################
//##########################################
// Getter & Instantiation

// Instantiation
var ajv = new (require("ajv"));

// Schemas
const schema = require("./JSON_schemas/schema.json");
const schema_formats = require("./JSON_schemas/schema_formats.json");
const schema_remote = require("./JSON_schemas/remote.json");

// Normal data
const valid = require("./JSON_data/valid.json");
const invalid = require("./JSON_data/invalid.json");

// Semantic data
const formats = require("./JSON_data/formats.json");

// Added schemas
ajv.addSchema(schema_remote);

//##########################################
//##########################################
//##########################################
// Validation

logValidation("Valid order example", schema, valid);
logValidation("Invalid order example", schema, invalid);
logValidation("Semantic example", schema_formats, formats);



//##########################################
//##########################################
//##########################################
// Logger

function logValidation(resultType, schema, data) {
    
    console.log(resultType + ": " + ajv.validate(schema, data));
    
}


