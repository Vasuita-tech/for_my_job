const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('../data/my.db');


db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        username    TEXT NOT NULL,
        password    TEXT NOT NULL,
        create_at   TEXT DEFAULT (datetime('now'))

    );

    `);

    module.exports={db}