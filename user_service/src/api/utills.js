const { v4: uuidv4 } = require("uuid");

function generateUUID() {
    return uuidv4().split("-").join("").toUpperCase();
}

module.exports ={generateUUID:generateUUID}