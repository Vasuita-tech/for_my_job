const {db} = require('../db/database.js');

function reg(name,pass){
    db.exec(`INSERT INTO users (username, password) VALUES (${name}, ${pass})`)
};

module.exports={reg}